import "../../assets/home.css"
import { BACKEND_URL } from "../../assets/config";
import axios from "axios";
import Cookies from 'js-cookie'

const axiosConfig = { headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + Cookies.get('AuthorizationAdmin') } };
const dataUser = [];
let user;
const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id")
if (Cookies.get('AuthorizationAdmin')) {
  try {
    await axios.get(BACKEND_URL + '/admin/customers', axiosConfig)
      .then((response) => dataUser.push(response.data))
    for (let index = 0; index < dataUser[0].length; index++) {
      if (dataUser[0][index].id == id) {
        user = dataUser[0][index]
      }
    }
  }
  catch (error) {
    alert(error.response.data.message)
  }
} else {

}

function formDataToJsonMapper(id, name, email, cpfOrCnpj, birthday, complement) {
  let formatedData = {
    id: id,
    name: name,
    email: email,
    cpfOrCnpj: cpfOrCnpj,
    birthday: birthday,
    complement: complement
  };
  return JSON.stringify(formatedData)
}

async function formHandle(e) {
  e.preventDefault();
  const idC = id;
  const name = e.target.name.value;
  const email = e.target.email.value;
  const cpfOrCnpj = e.target.cpfOrCnpj.value;
  const birthday = e.target.birthday.value.replace(/-/g,"/");
  const complement = e.target.complement.value;

  const jsonData = formDataToJsonMapper(idC, name, email, cpfOrCnpj, birthday, complement);



  try {
    await axios.put(BACKEND_URL + '/admin/customers', jsonData, axiosConfig)
    window.location = '/admin/customers'
    alert('Edição Relizada com Sucesso')
  }
  catch (error) {
    alert(error.response.data.message)
    console.log(error.response)
  }
}







export default function AdminCustomersEdit() {
  if (!Cookies.get('AuthorizationAdmin')) {
    window.location = '/login/admin'
  }
  return (
    <>


      <form onSubmit={async function (e) { await formHandle(e) }}>
        <div>
          <div className="py-12 bg-primaria  transition duration-150 ease-in-out z-10 absolute top-0 right-0 bottom-0 left-0" id="modal">
            <div role="alert" className="container mx-auto w-11/12 md:w-2/3 max-w-lg">
              <div className="relative py-8 px-5 md:px-10 bg-white shadow-md rounded border border-gray-400">

                <h1 className="text-gray-800 font-lg font-bold tracking-normal leading-tight mb-4">Editar Dados do Profissional</h1>
                <label htmlFor="name" className="text-gray-800 text-sm font-bold leading-tight tracking-normal">
                  Nome:
                </label>
                <input
                  defaultValue={user.name}
                  type="text"
                  id="name"
                  name="name"
                  className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border" required />

                <label htmlFor="name" className="text-gray-800 text-sm font-bold leading-tight tracking-normal">
                  Email:
                </label>
                <input
                  defaultValue={user.email}
                  type="email"
                  id=""
                  name="email"
                  className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border" required />
                <label htmlFor="name" className="text-gray-800 text-sm font-bold leading-tight tracking-normal">
                  Cpf/Cnpj:
                </label>
                <input
                  defaultValue={user.cpfOrCnpj}
                  type="texy"
                  id=""
                  name="cpfOrCnpj"
                  className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border" required />

                <label htmlFor="name" className="text-gray-800 text-sm font-bold leading-tight tracking-normal">
                  Birthday:
                </label>
                <input
                  defaultValue={user.birthday}
                  type="date"
                  id=""
                  name="birthday"
                  className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border" required />

                <label htmlFor="name" className="text-gray-800 text-sm font-bold leading-tight tracking-normal">
                  Complemento:
                </label>
                <input
                  defaultValue={user.complement}
                  type="text"
                  id=""
                  name="complement"
                  className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border" required />

                <div className="flex items-center justify-start w-full">
                  <button
                    type="submit"
                    className="focus:outline-none bg-primaria transition duration-150 ease-in-out hover:bg-primaria rounded text-white px-8 py-2 text-sm">Submit</button>
                  <button
                  type="button"
                    onClick={() => {
                      window.location = '/admin/customers'
                    }}
                    className="focus:outline-none ml-3 bg-gray-100 transition duration-150 text-gray-600 ease-in-out hover:border-gray-400 hover:bg-gray-300 border rounded px-8 py-2 text-sm" onclick="modalHandler()">
                    Cancel
                  </button>
                </div>

              </div>
            </div>
          </div>

        </div>

      </form>


    </>
  )
}


