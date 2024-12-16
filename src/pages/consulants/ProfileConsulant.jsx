import "../../assets/home.css"
import { BACKEND_URL } from "../../assets/config";
import axios from "axios";
import Cookies from 'js-cookie'
import { jwtDecode } from "jwt-decode";


const dataUser = [];
if (Cookies.get('AuthorizationConsulant')) {
  const decodedId = jwtDecode(Cookies.get('AuthorizationConsulant'));
  const axiosConfig = { headers: { 'Authorization': 'Bearer ' + Cookies.get('AuthorizationConsulant') } };
  try {
    await axios.get(BACKEND_URL + '/consulants/' + decodedId.sub, axiosConfig)
      .then((response) => dataUser.push(response.data))

  }
  catch (error) {
    alert(error.response.data.message)
  }
}

function formDataToJsonMapper(name, email, cpf, birthday) {
  let formatedData = {
    name: name,
    email: email,
    cpf: cpf,
    birthday: birthday,
  };
  return JSON.stringify(formatedData)
}

async function formHandle(e) {
  e.preventDefault();
  
  const name = e.target.name.value;
  const email = e.target.email.value;
  const cpf = e.target.cpf.value;
  const birthday = e.target.birthday.value;
  const jsonData = formDataToJsonMapper(name, email, cpf, birthday);

  const axiosConfig = { headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + Cookies.get('AuthorizationConsulant') } };


  try {
    const decodedId = jwtDecode(Cookies.get('AuthorizationConsulant'));
    await axios.put(BACKEND_URL + '/consulants/' + decodedId.sub, jsonData, axiosConfig)
    window.location = '/consulant'
    alert('Edição Relizada com Sucesso')
  }
  catch (error) {
    alert(error.response.data.message)
  }
}




export default function ProfileConsulant() {
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
          <h1 className="text-2xl font-bold sm:text-3xl">Meus Dados</h1>
        </div>

        <form onSubmit={async function (e) { await formHandle(e) }} className="mx-auto mb-0 mt-8 max-w-md space-y-4">
          <div>
            <input
              defaultValue={Cookies.get('AuthorizationConsulant') ? dataUser[0].name : 'consultor'}
              className="w-full rounded-lg border-gray-200 p-3 text-sm"
              placeholder="Nome"
              type="text"
              id="name"
              name="name"
            />
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <input
                defaultValue={Cookies.get('AuthorizationConsulant') ? "Id: " + dataUser[0].id : 'id'}
                className="w-full rounded-lg border-gray-200 p-3 text-sm"
                placeholder="Id"
                type="text"
                id="Id"
                readOnly
              />
            </div>

            <div>
              <input
                defaultValue={Cookies.get('AuthorizationConsulant') ? dataUser[0].cpf : 'cpf'}
                className="w-full rounded-lg border-gray-200 p-3 text-sm"
                placeholder=""
                type="text"
                id=""
                name="cpf"
              />
            </div>
          </div>
          <div>

            <div className="relative">
              <input
                defaultValue={Cookies.get('AuthorizationConsulant') ? dataUser[0].email : 'email'}
                type="email"
                name="email"
                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder=""
              />

              <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-4 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                  />
                </svg>
              </span>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label className="sr-only" htmlFor="Id">birthday</label>
              <input
                defaultValue={Cookies.get('AuthorizationConsulant') ? dataUser[0].birthday : 'data'}
                className="w-full rounded-lg border-gray-200 p-3 text-sm"
                placeholder=""
                name="birthday"
                type="date"
                id=""

              />
            </div>

            <div>
              <label className="sr-only" htmlFor="complement">complemetn</label>
              <input
                defaultValue={Cookies.get('AuthorizationConsulant') ?"Loja Id: "+ dataUser[0].store_id : 'loja id'}
                className="w-full rounded-lg border-gray-200 p-3 text-sm"
                placeholder=""
                type="text"
                id=""
                name="store_id"
                readOnly
              />
            </div>
          </div>



          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-500">
              Criado em: {Cookies.get('AuthorizationConsulant') ? dataUser[0].created_at : 'data'}
            </p>

            <button
              type="submit"
              className="inline-block rounded-lg bg-primaria px-5 py-3 text-sm font-medium text-white"
            >
              Editar
            </button>
          </div>
        </form>
      </div>






    </>
  )
}


