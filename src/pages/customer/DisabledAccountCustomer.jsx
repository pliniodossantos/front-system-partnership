import Cookies from 'js-cookie'
import { BACKEND_URL } from "../../assets/config";
import axios from "axios";
import { jwtDecode } from "jwt-decode";

function formDataToJsonMapper(active) {
  let formatedData = {
   active: active
  };
  return JSON.stringify(formatedData)
}

async function formHandle(e) {
  e.preventDefault();
  const active = false
  const jsonData = formDataToJsonMapper(active);
  const axiosConfig = { headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + Cookies.get('AuthorizationCustomer') } };
  const decodedId = jwtDecode(Cookies.get('AuthorizationCustomer'));
  
  try {
    await axios.patch(BACKEND_URL + '/customers/state/' + decodedId.sub, jsonData, axiosConfig)
    window.location = '/login/customer'
    Cookies.remove('AuthorizationCustomer')
    alert('Usuário Desativado!')

  }
  catch (error) {
    alert(error.response.data.message)
  }
}



async function cancelHandle(e) {
  e.preventDefault();
  window.location = '/customer'


}

export default function DisabledAccountCustomer() {
  if (!Cookies.get('AuthorizationCustomer')) {
    window.location = '/login/customer'
  }
  return (
    <>

      <div className="fixed inset-0 flex items-center justify-center z-50 backdrop-blur confirm-dialog ">
        <div className="relative px-4 min-h-screen md:flex md:items-center md:justify-center">
          <div className=" opacity-25 w-full h-full absolute z-10 inset-0"></div>
          <div className="bg-white rounded-lg md:max-w-md md:mx-auto p-4 fixed inset-x-0 bottom-0 z-50 mb-4 mx-4 md:relative shadow-lg">
            <div className="md:flex items-center">
              <div className="rounded-full border border-gray-300 flex items-center justify-center w-16 h-16 flex-shrink-0 mx-auto">
                <i className="bx bx-error text-3xl">
                  &#9888;
                </i>
              </div>
              <div className="mt-4 md:mt-0 md:ml-6 text-center md:text-left">
                <p className="font-bold">Atenção!</p>
                <p className="text-sm text-gray-700 mt-1">Será necessario solicitar junto ao administrador a reativação.
                </p>
              </div>
            </div>
            <div className="text-center md:text-right mt-4 md:flex md:justify-end">
              <button onClick={async function (e) { await formHandle(e) }}  id="confirm-delete-btn" className="block w-full md:inline-block md:w-auto px-4 py-3 md:py-2 bg-red-200 text-red-700 rounded-lg font-semibold text-sm md:ml-2 md:order-2">
                Desativar
              </button>
              <button onClick={async function (e) { await cancelHandle(e) }} name='cancel' id="confirm-cancel-btn" className="block w-full md:inline-block md:w-auto px-4 py-3 md:py-2 bg-gray-200 rounded-lg font-semibold text-sm mt-4 md:mt-0 md:order-1">
                Cancelar
              </button>
            </div>
          </div>
        </div>
      </div>



    </>

  )
}


