import "../../assets/home.css"
import { BACKEND_URL } from "../../assets/config";
import axios from "axios";
import Cookies from 'js-cookie'


const axiosConfig = { headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + Cookies.get('AuthorizationAdmin') } };
function formDataToJsonMapper(consulantCpf, points_consulant) {
  let formatedData = {
    consulantCpf: consulantCpf,
    points_consulant: points_consulant
  };
  return JSON.stringify(formatedData)
}
async function formHandle(e) {
  e.preventDefault();
  const consulantCpf = e.target.consulantCpf.value;
  const points_consulant = "-"+e.target.points_consulant.value;
  const points_consulantFormat = Number(points_consulant);
  const jsonData = formDataToJsonMapper(consulantCpf, points_consulantFormat);
  try {
    await axios.post(BACKEND_URL + '/admin/order/decrease/consulant', jsonData, axiosConfig)
    window.location = '/admin/points'
    alert('Pedido lançado com sucesso')
  }
  catch (error) {
    alert(error.response.data.message)
  }

}

export default function PointsAdminConsulantDecrease() {
  return (

    <>

      <form onSubmit={async function (e) { await formHandle(e) }}>
        <div>
          <div className="py-12 bg-primaria  transition duration-150 ease-in-out z-10 absolute top-0 right-0 bottom-0 left-0" id="modal">
            <div role="alert" className="container mx-auto w-11/12 md:w-2/3 max-w-lg">
              <div className="relative py-8 px-5 md:px-10 bg-white shadow-md rounded border border-gray-400">

                <h1 className="text-gray-800 font-lg font-bold tracking-normal leading-tight mb-4">Lançar pontos utilizados - Consultor</h1>
                <label htmlFor="name" className="text-gray-800 text-sm font-bold leading-tight tracking-normal">
                  Cpf do consultor:
                </label>
                <input
                  type="text"
                  id=""
                  name="consulantCpf"
                  className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border" required />

                <label htmlFor="name" className="text-gray-800 text-sm font-bold leading-tight tracking-normal">
                  Pontos(não é necessário colocar o "-"):
                </label>
                <input
                  type="number"
                  id=""
                  name="points_consulant"
                  className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border" required />

                <div className="flex items-center justify-start w-full">
                  <button
                    type="submit"
                    className="focus:outline-none bg-primaria transition duration-150 ease-in-out hover:bg-primaria rounded text-white px-8 py-2 text-sm">Submit</button>
                  <button
                    type="button"
                    onClick={() => {
                      window.location = '/admin/points'
                    }}
                    className="focus:outline-none ml-3 bg-gray-100 transition duration-150 text-gray-600 ease-in-out hover:border-gray-400 hover:bg-gray-300 border rounded px-8 py-2 text-sm" onclick="modalHandler()">
                    Cancelar
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