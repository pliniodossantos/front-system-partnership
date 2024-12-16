import "../../assets/home.css"
import { BACKEND_URL } from "../../assets/config";
import axios from "axios";
import Cookies from 'js-cookie'
import { jwtDecode } from "jwt-decode";

function formDataToJsonMapper(customerCpfOrCnpj, points_customer, obs) {
  let formatedData = {
    customerCpfOrCnpj: customerCpfOrCnpj,
    points_customer: points_customer,
    obs: obs,
  };
  return JSON.stringify(formatedData)
}

async function formHandle(e) {
  e.preventDefault();
  const customerCpfOrCnpj = e.target.customerCpfOrCnpj.value;
  const points_customer = e.target.points_customer.value;
  const obs = e.target.obs.value;
  
  const jsonData = formDataToJsonMapper(customerCpfOrCnpj, points_customer, obs);
  const axiosConfig = { headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + Cookies.get('AuthorizationConsulant') } };


  try {
    const decodedId = jwtDecode(Cookies.get('AuthorizationConsulant'))
    await axios.post(BACKEND_URL + '/consulants/orders/' + decodedId.sub, jsonData, axiosConfig)
    window.location = '/consulant'
    alert('Pedido de pontuação enviado com sucesso!')
  }
  catch (error) {
    alert(error.response.data.message)
  }
}



export default function CreateOrder() {
   if (!Cookies.get('AuthorizationConsulant')) {
      window.location = '/login/consulant'
    }
  return (
    <>
      <header className="border-b-2 border-terciaria bg-primaria">
        <div className="mx-auto max-w-screen-xl sm: sm: lg:">
          <div className="flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
            <a href="/consulant" className="ml-auto mr-auto">
              <img
                alt=""
                src="../logo.svg"
                className="size-40"
              />
            </a>
          </div>
        </div>
      </header>




      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-lg text-center">
          <h1 className="text-2xl font-bold sm:text-3xl">Criar Pedido de Pontuação</h1>
        </div>

        <form onSubmit={async function (e) { await formHandle(e) }} className="mx-auto mb-0 mt-8 max-w-md space-y-4">
          <div>
            <input
              required
              name="customerCpfOrCnpj"
              className="w-full rounded-lg border-gray-200 p-3 text-sm"
              placeholder="Cpf ou Cnpj do proffisional"
              type="text"
              id=""
            />
          </div>

          <div>
            <div className="relative">
              <input
                required
                name="points_customer"
                type="number"
                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="Pontos"
              />
            </div>
          </div>
          <div>
            <div className="relative">
              <input
                required
                name="obs"
                type="text"
                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="Obs:"
              />
            </div>
          </div>



          <div className="flex items-center justify-between">


            <button
              type="submit"
              className="inline-block rounded-lg bg-primaria px-5 py-3 text-sm font-medium text-white"
            >
              Enviar
            </button>
          </div>
        </form>
      </div>






    </>
  )
}


