import "../../assets/home.css"
import { BACKEND_URL } from "../../assets/config";
import axios from "axios";
import Cookies from 'js-cookie'
import { jwtDecode } from "jwt-decode";

function formDataToJsonMapper(oldPassword, newPassword, newPassword_confirmation) {
  let formatedData = {
    oldPassword: oldPassword,
    newPassword: newPassword,
    newPassword_confirmation: newPassword_confirmation
  };
  return JSON.stringify(formatedData)
}

async function formHandle(e) {
  e.preventDefault();
  const oldPassword = e.target.oldPassword.value;
  const newPassword = e.target.newPassword.value;
  const newPassword_confirmation = e.target.newPassword_confirmation.value;
  const jsonData = formDataToJsonMapper(oldPassword, newPassword, newPassword_confirmation);
  const axiosConfig = { headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + Cookies.get('AuthorizationCustomer') } };
  const decodedId = jwtDecode(Cookies.get('AuthorizationCustomer'));

  try {
    await axios.patch(BACKEND_URL + '/customers/password/update/' + decodedId.sub, jsonData, axiosConfig)
    window.location = '/customer'
    alert('Senha Alterada com Sucesso')

  }
  catch (error) {
    alert(error.response.data.message)
  }
}




export default function UpdatePasswordCustomer() {
  if (!Cookies.get('AuthorizationCustomer')) {
      window.location = '/login/customer'
    }
  return (
    <>
      <header className="border-b-2 border-terciaria bg-primaria">
        <div className="mx-auto max-w-screen-xl sm: sm: lg:">
          <div className="flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
            <a href="/customer" className="ml-auto mr-auto">
              <img
                alt=""
                src="../../logo.svg"
                className="size-40"
              />
            </a>
          </div>
        </div>
      </header>




      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-lg text-center">
          <h1 className="text-2xl font-bold sm:text-3xl">Atualizar Senha</h1>
        </div>

        <form onSubmit={async function(e){ await formHandle(e)}} className="mx-auto mb-0 mt-8 max-w-md space-y-4">
          <div>
            <input
              name="oldPassword"
              className="w-full rounded-lg border-gray-200 p-3 text-sm"
              placeholder="Senha Atual"
              type="password"
            />
          </div>


          <div>
            <div className="relative">
              <input
                name="newPassword"
                type="password"
                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="Nova Senha"
              />
            </div>
          </div>
          <div>
            <div className="relative">
              <input
                name="newPassword_confirmation"
                type="password"
                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="Confirmar Nova Senha"
              />
            </div>
          </div>
          <div className="flex items-center justify-between">

            <button
              type="submit"
              className="inline-block rounded-lg bg-primaria px-5 py-3 text-sm font-medium text-white"
            >
              Atualizar Senha
            </button>
          </div>
        </form>
      </div>






    </>
  )
}


