import {BACKEND_URL} from "../../assets/config";
import axios from "axios";
import Cookies from 'js-cookie'




function formDataToJsonMapper(cpfOrCnpj, password){
  let formatedData = {
    cpfOrCnpj: cpfOrCnpj,
    password: password
  };
  return JSON.stringify(formatedData)
}

async function formHandle(e) {
  e.preventDefault();
  const cpfOrCnpj = e.target.cpfOrCnpj.value;
  const password = e.target.password.value;
  const jsonData = formDataToJsonMapper(cpfOrCnpj, password);
  const axiosConfig = {headers: { 'Content-Type': 'application/json'}};
  
  
  try{
  await axios.post(BACKEND_URL + '/customers/sessions', jsonData, axiosConfig)
  .then((response) => Cookies.set('AuthorizationCustomer', response.data.token,{
    expires: 5
  }))
  window.location = '/customer'
  
}
catch(error){
  alert(error.response.data.message)
}
}


export default function LoginCustomer() 
{if (Cookies.get('AuthorizationCustomer')) {
  window.location = '/customer'
}
  return (
    <>
      
      <section className="relative flex flex-wrap lg:h-screen lg:items-center pt-3 pl-3 pr-3 pb-2 bg-primaria">
        <div className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-lg text-center">
            <img src="../logo.svg" alt="" srcset="" className="ml-auto mr-auto" />

            <p className="mt-4 text-gray-300">
              Muito mais que um programa de pontuação, estimamos a parceria e o cuidado do relacionamento profissional.

            </p>
          </div>

          <form onSubmit={async function (e) { await formHandle(e) }} className="mx-auto mb-0 mt-8 max-w-md space-y-4">
            <div>
              <div className="relative">
                <input
                  required
                  name="cpfOrCnpj"
                  type="text"
                  className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                  placeholder="Cpf ou Cnpj"
                />
              </div>
            </div>

            <div>
              <div className="relative">
                <input
                  required
                  name="password"
                  type="password"
                  className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                  placeholder="Senha"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-300">
                Não tem uma conta?
                <a className="underline" href="/create/customer">Criar Conta</a>
              </p>

              <button
                type="submit"
                className="inline-block rounded-lg bg-secundaria text-primaria px-5 py-3 text-sm font-medium text-white transition hover:bg-secundaria hover:text-terciaria focus:outline-none focus:ring active:text-terciaria"
              >
                Entrar
              </button>
            </div>
            <div className="flex items-right">
              <p className="text-sm text-gray-300 ml-auto">
                <a className="underline" href="/customer/password/forgot">Esqueci minha Senha</a>
              </p>

            </div>
          </form>
        </div>

        <div className="relative h-64 w-full sm:h-96 lg:h-full lg:w-1/2">
          <img
            alt=""
            src="../teste.svg"
            className="absolute inset-0 h-full w-full object-cover mb-2"
          />
        </div>
      </section>


    </>
  )
}


