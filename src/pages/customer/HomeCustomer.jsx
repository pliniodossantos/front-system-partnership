import "../../assets/home.css"
import {BACKEND_URL} from "../../assets/config";
import axios from "axios";
import Cookies from 'js-cookie'
import { jwtDecode } from "jwt-decode";


const dataUser = [];
if (Cookies.get('AuthorizationCustomer')) {
const decodedId = jwtDecode(Cookies.get('AuthorizationCustomer'));
const axiosConfig = {headers: { 'Authorization': 'Bearer '+ Cookies.get('AuthorizationCustomer')}};
try{
  await axios.get(BACKEND_URL + '/customers/'+decodedId.sub, axiosConfig)
  .then((response) => dataUser.push(response.data))
  
}
catch(error){
  alert(error.response.data.message)
}
}else{
  
}



export default function HomeCustomer() {
  if (!Cookies.get('AuthorizationCustomer')) {
    window.location = '/login/customer'
  }
  return (
    <>
      <header className="border-b-2 border-terciaria bg-primaria">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
          <div className="flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-2xl font-bold text-white sm:text-3xl">Olá, {Cookies.get('AuthorizationCustomer') ? dataUser[0].name : 'profissional'} </h1>

              <p className="mt-1.5 text-sm text-gray-300">
                Aqui você encontra todas as ferramentas disponíveis em nossa platarfoma.
              </p>
            </div>

            <div className="flex items-center gap-4">


              <button
              onClick={() => {
                Cookies.remove('AuthorizationCustomer')
                window.location.href = '/login/customer'
              }}
                className="inline-block rounded bg-secundaria px-5 py-3 text-sm font-medium text-primaria transition hover:bg-terciaria focus:outline-none focus:ring"
                type="button"
              >
                Log Out
              </button>
            </div>
          </div>
        </div>
      </header>


      <div className="grid grid-cols-1 gap-4 m-20 md:m-40 lg:grid-cols-2 lg:gap-8">
        <div className="rounded-lg bg-gray-200">
          <a href="/customer/profile">
            <article className="overflow-hidden rounded-lg shadow transition hover:shadow-lg">
              <img
                alt=""
                src="../infos.jpg"
                className="h-56 w-full object-cover "
              />

              <div className="bg-white p-4 sm:p-6">
                <h3 className="mt-0.5 text-lg text-gray-900">Meus Dados</h3>
                <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                  Visualize e edite seus dados de cadastro.
                </p>
              </div>
            </article>
          </a>
        </div>
        <div className="rounded-lg bg-gray-200">
          <a href="/customer/points">
            <article className="overflow-hidden rounded-lg shadow transition hover:shadow-lg">
              <img
                alt=""
                src="../stats.jpg"
                className="h-56 w-full object-cover "
              />

              <div className="bg-white p-4 sm:p-6">
                <h3 className="mt-0.5 text-lg text-gray-900">Meus Pontos</h3>
                <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                  Confira um extrato detalhado dos seus pontos.
                </p>
              </div>
            </article>
          </a>
        </div>

        <div className="rounded-lg bg-gray-200">
          <a href="/customer/password/update">
            <article className="overflow-hidden rounded-lg shadow transition hover:shadow-lg">
              <img
                alt=""
                src="../password.jpg"
                className="h-56 w-full object-cover "
              />

              <div className="bg-white p-4 sm:p-6">
                <h3 className="mt-0.5 text-lg text-gray-900">Gerenciamento de Senha</h3>
                <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                  Aqui você consegue atualizar a sua senha de cadastro.
                </p>
              </div>
            </article>
          </a>
        </div>
        <div className="rounded-lg bg-gray-200">
          <a href="/customer/account/disabled">
            <article className="overflow-hidden rounded-lg shadow transition hover:shadow-lg">
              <img
                alt=""
                src="../door.jpg"
                className="h-56 w-full object-cover "
              />

              <div className="bg-white p-4 sm:p-6">
                <h3 className="mt-0.5 text-lg text-gray-900">Desativar conta</h3>
                <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                  Desativando sua conta, será necessario solicitar reativação junto ao admin.
                </p>
              </div>
            </article>
          </a>
        </div>


      </div>
    </>
  )
}


