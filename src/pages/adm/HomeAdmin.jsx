import "../../assets/home.css"
import {BACKEND_URL} from "../../assets/config";
import axios from "axios";
import Cookies from 'js-cookie'
import { jwtDecode } from "jwt-decode";


const dataUser = [];
if (Cookies.get('AuthorizationAdmin')) {
const decodedId = jwtDecode(Cookies.get('AuthorizationAdmin'));
const axiosConfig = {headers: { 'Authorization': 'Bearer '+ Cookies.get('AuthorizationAdmin')}};
try{
  await axios.get(BACKEND_URL + '/admin/'+decodedId.sub, axiosConfig)
  .then((response) => dataUser.push(response.data))
  
}
catch(error){
  alert(error.response.data.message)
}
}else{
  
}



export default function HomeAdmin() {
  if (!Cookies.get('AuthorizationAdmin')) {
    window.location = '/login/admin'
  }
  return (
    <>
      <header className="border-b-2 border-terciaria bg-primaria">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
          <div className="flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-2xl font-bold text-white sm:text-3xl">Olá, {Cookies.get('AuthorizationAdmin') ? dataUser[0].name : 'profissional'} </h1>

              <p className="mt-1.5 text-sm text-gray-300">
                Aqui você encontra todas as ferramentas disponíveis em nossa platarfoma.
              </p>
            </div>

            <div className="flex items-center gap-4">


              <button
              onClick={() => {
                Cookies.remove('AuthorizationAdmin')
                window.location.href = '/login/admin'
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
          <a href="/admin/profile">
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
          <a href="/admin/points">
            <article className="overflow-hidden rounded-lg shadow transition hover:shadow-lg">
              <img
                alt=""
                src="../stats.jpg"
                className="h-56 w-full object-cover "
              />

              <div className="bg-white p-4 sm:p-6">
                <h3 className="mt-0.5 text-lg text-gray-900">Pontuações</h3>
                <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                 Ferramentas para aprovação e controle das pontuações.
                </p>
              </div>
            </article>
          </a>
        </div>

        <div className="rounded-lg bg-gray-200">
          <a href="/admin/password/update">
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
          <a href="/admin/customers">
            <article className="overflow-hidden rounded-lg shadow transition hover:shadow-lg">
              <img
                alt=""
                src="../clientes.jpg"
                className="h-56 w-full object-cover "
              />

              <div className="bg-white p-4 sm:p-6">
                <h3 className="mt-0.5 text-lg text-gray-900">Profissionais</h3>
                <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                  Ferramentas voltadas para a edição dos profisionais. 
                </p>
              </div>
            </article>
          </a>
        </div>
        <div className="rounded-lg bg-gray-200">
          <a href="/admin/stores">
            <article className="overflow-hidden rounded-lg shadow transition hover:shadow-lg">
              <img
                alt=""
                src="../stores.jpg"
                className="h-56 w-full object-cover "
              />

              <div className="bg-white p-4 sm:p-6">
                <h3 className="mt-0.5 text-lg text-gray-900">Lojas</h3>
                <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                  Ferramentas voltadas para a edição das lojas parceiras. 
                </p>
              </div>
            </article>
          </a>
        </div>
        <div className="rounded-lg bg-gray-200">
          <a href="/admin/consulants">
            <article className="overflow-hidden rounded-lg shadow transition hover:shadow-lg">
              <img
                alt=""
                src="../sales.jpg"
                className="h-56 w-full object-cover "
              />

              <div className="bg-white p-4 sm:p-6">
                <h3 className="mt-0.5 text-lg text-gray-900">Consultores</h3>
                <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                  Ferramentas voltadas para a edição dos consultores. 
                </p>
              </div>
            </article>
          </a>
        </div>


        <div className="rounded-lg bg-gray-200">
          <a href="/admin/account/delete">
            <article className="overflow-hidden rounded-lg shadow transition hover:shadow-lg">
              <img
                alt=""
                src="../door.jpg"
                className="h-56 w-full object-cover "
              />

              <div className="bg-white p-4 sm:p-6">
                <h3 className="mt-0.5 text-lg text-gray-900">Deletar Conta</h3>
                <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                  A conta será deletada permanentemente. 
                </p>
              </div>
            </article>
          </a>
        </div>


      </div>
    </>
  )
}


