import "../../assets/home.css"
import { BACKEND_URL } from "../../assets/config";
import axios from "axios";
import Cookies from 'js-cookie'
import { jwtDecode } from "jwt-decode";


const dataUser = [];
if (Cookies.get('AuthorizationAdmin')) {
  const decodedId = jwtDecode(Cookies.get('AuthorizationAdmin'));
  const axiosConfig = { headers: { 'Authorization': 'Bearer ' + Cookies.get('AuthorizationAdmin') } };
  try {
    await axios.get(BACKEND_URL + '/admin/' + decodedId.sub, axiosConfig)
      .then((response) => dataUser.push(response.data))

  }
  catch (error) {
    alert(error.response.data.message)
  }
}

function formDataToJsonMapper(name, email, cpf) {
  let formatedData = {
    name: name,
    email: email,
    cpf: cpf,
  };
  return JSON.stringify(formatedData)
}

async function formHandle(e) {
  e.preventDefault();
  const name = e.target.name.value;
  const email = e.target.email.value;
  const cpf = e.target.cpf.value;

  const jsonData = formDataToJsonMapper(name, email, cpf);

  const axiosConfig = { headers: { 'Content-Type': 'application/json','Authorization': 'Bearer ' + Cookies.get('AuthorizationAdmin') } };


  try {
    const decodedId = jwtDecode(Cookies.get('AuthorizationAdmin'));
    await axios.put(BACKEND_URL + '/admin/' + decodedId.sub, jsonData, axiosConfig)
    window.location = '/admin'
    alert('Edição Relizada com Sucesso')
  }
  catch (error) {
    alert(error.response.data.message)
  }
}





export default function ProfileAdmin() {
  if (!Cookies.get('AuthorizationAdmin')) {
    window.location = '/login/admin'
  }
  return (
    <>
      <header className="border-b-2 border-terciaria bg-primaria">
        <div className="mx-auto max-w-screen-xl sm: sm: lg:">
          <div className="flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
            <a href="/admin" className="ml-auto mr-auto">
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
              defaultValue={Cookies.get('AuthorizationAdmin') ? dataUser[0].name : 'Adm'}
              className="w-full rounded-lg border-gray-200 p-3 text-sm"
              placeholder="Nome"
              type="text"
              id="name"
              name="name"
            />
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label className="sr-only" htmlFor="Id">Id</label>
              <input
                defaultValue={Cookies.get('AuthorizationAdmin') ? 'Id: ' + dataUser[0].id : 'id'}
                className="w-full rounded-lg border-gray-200 p-3 text-sm"
                placeholder="Id"
                type="text"
                id="Id"
                name="id"
                readOnly
              />
            </div>

            <div>
              <label className="sr-only" htmlFor="phone">cpfOrCnpj</label>
              <input
                defaultValue={Cookies.get('AuthorizationAdmin') ? dataUser[0].cpf : 'Cpf'}
                className="w-full rounded-lg border-gray-200 p-3 text-sm"
                placeholder=""
                type="text"
                id="cpfOrCnpj"
                name="cpf"
              />
            </div>
          </div>
          <div>
            <label htmlFor="email" className="sr-only">Email</label>

            <div className="relative">
              <input
                defaultValue={Cookies.get('AuthorizationAdmin') ? dataUser[0].email : 'email'}
                type="email"
                id="email"
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

          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-500">
              Criado em: {Cookies.get('AuthorizationAdmin') ? dataUser[0].created_at : 'data'}
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

