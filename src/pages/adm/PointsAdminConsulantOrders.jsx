import "../../assets/home.css"
import { BACKEND_URL } from "../../assets/config";
import axios from "axios";
import Cookies from 'js-cookie'

const axiosConfig = { headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + Cookies.get('AuthorizationAdmin') } };
const dataUser = [];
let totalPoints = 0;
const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id")

if (Cookies.get('AuthorizationAdmin') && window.location.pathname == '/admin/points/consulant/order') {
  try {
    await axios.post(BACKEND_URL + '/admin/order/consulant',{'id':id}, axiosConfig)
      .then((response) => dataUser.push(response.data))
      for (let index = 0; index < dataUser[0].length; index++) {
        totalPoints = dataUser[0][index].points + totalPoints
      }
  }
  catch (error) {
    alert(error.response.data.message)
  }
} else {

}




export default function PointsAdminConsulantOrders() {
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
                src="../../../logo.svg"
                className="size-40"
              />
            </a>
          </div>
        </div>
      </header>




      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-lg text-center mb-5">
          <h1 className="text-2xl font-bold sm:text-3xl text-primaria">Pontuação</h1>
        </div>


        <article className="flex items-center gap-4 rounded-lg border border-terciaria bg-primaria p-6 mb-5">


          <div className="ml-auto mr-auto">
            <p className="text-2xl text-white font-medium text-gray-900">{totalPoints || ""}</p>

            <p className="text-sm text-gray-300">Total de Pontos</p>
          </div>
        </article>
        {dataUser[0].map((item) => {
          return (


            <article
              className="flex items-center gap-4 rounded-lg border border-gray-100 bg-white p-6 sm:justify-between mb-5">

              <div>
                <p className="text-2xl font-medium text-primaria">{item.points}</p>
                <p className="text-sm text-gray-500"><span className="text-primaria">Cliente:</span> {item.customer}</p>
                <p className="text-sm text-gray-500"><span className="text-primaria">Loja:</span> {item.store}</p>
                <p className="text-sm text-gray-500"><span className="text-primaria">Info:</span> {item.obs}</p>
                <p className="text-sm text-gray-500"><span className="text-primaria">Vence em:</span> {item.expires}</p>

              </div>
            </article>

          )
        })}

      </div>

    </>
  )
}


