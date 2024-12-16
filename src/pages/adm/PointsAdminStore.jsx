import "../../assets/home.css"
import { BACKEND_URL } from "../../assets/config";
import axios from "axios";
import Cookies from 'js-cookie'

const axiosConfig = { headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + Cookies.get('AuthorizationAdmin') } };
const dataUser = [];
if (Cookies.get('AuthorizationAdmin')) {
  try {
    await axios.get(BACKEND_URL + '/admin/stores', axiosConfig)
      .then((response) => dataUser.push(response.data))
  }
  catch (error) {
    alert(error.response.data.message)
  }
} else {

}




export default function PointsAdminStore() {
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
                src="../../logo.svg"
                className="size-40"
              />
            </a>
          </div>
        </div>
      </header>




      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-lg text-center mb-5">
          <h1 className="text-2xl font-bold sm:text-3xl text-primaria">Lojas</h1>
        </div>


        <article className="flex items-center gap-4 rounded-lg border border-terciaria bg-primaria p-6 mb-5">


          <div className="ml-auto mr-auto">
            <p className="text-2xl text-white font-medium text-gray-900">{dataUser[0].length}</p>
            <p className="text-sm text-gray-300">Total de Lojas</p>
          </div>
        </article>





        <div className="overflow-x-auto rounded-lg">
          <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
            <thead className="text-left">
              <tr>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Nome</th>
                <th className="whitespace-nowrap py-2 font-medium text-gray-900">Email</th>
                <th className="whitespace-nowrap py-2 font-medium text-gray-900">Cnpj</th>
                <th className="px-4 py-2"></th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-200">
              {dataUser[0].map((item) => {
                return (

                  <tr id={item.id}>
                    <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">{item.name}</td>
                    <td className="whitespace-nowrap pl-1 py-2 text-gray-700">{item.email}</td>
                    <td className="whitespace-nowrap pl-1 py-2 text-gray-700">{item.cnpj}</td>
                    <td className="whitespace-nowrap  py-2">
                      <a
                      onClick={() => {
                        window.location = '/admin/points/stores/order?id='+item.id
                      }} 
                        className="inline-block rounded bg-primaria px-4 py-2 text-xs font-medium text-white hover:bg-secundaria cursor-pointer"
                      >
                        
                        Verificar
                      </a>
                    </td>



                  </tr>
                )
              })}


            </tbody>
          </table>
        </div>









       










      </div>

    </>
  )
}


