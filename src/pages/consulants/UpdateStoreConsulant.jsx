import "../../assets/home.css"
import Cookies from 'js-cookie'
import { BACKEND_URL } from "../../assets/config";
import axios from "axios";
import { jwtDecode } from "jwt-decode";

function formDataToJsonMapper(cnpjStore) {
  let formatedData = {
    cnpjStore: cnpjStore
  };
  return JSON.stringify(formatedData)
}

async function formHandle(e) {
  e.preventDefault();
  const cnpjStore = e.target.cnpjStore.value;
  const jsonData = formDataToJsonMapper(cnpjStore);
  const axiosConfig = { headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + Cookies.get('AuthorizationConsulant') } };
  const decodedId = jwtDecode(Cookies.get('AuthorizationConsulant'));
  
  try {
    await axios.patch(BACKEND_URL + '/consulants/storeupdate/' + decodedId.sub, jsonData, axiosConfig)
    window.location = '/consulant'
    alert('Loja Atualizada')

  }
  catch (error) {
    alert(error.response.data.message)
  }
}



async function cancelHandle(e) {
  e.preventDefault();
  window.location = '/consulant'


}
export default function UpdateStoreConsulant() {
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
          <h1 className="text-2xl font-bold sm:text-3xl">Alterar Loja</h1>
        </div>

        <form onSubmit={async function (e) { await formHandle(e) }} className="mx-auto mb-0 mt-8 max-w-md space-y-4">
          <div>
            <input
            required
              className="w-full rounded-lg border-gray-200 p-3 text-sm"
              placeholder="Inserir Cnpj da nova Loja"
              type="text"
              id=""
              name="cnpjStore"
            />
          </div>
          <div className="flex items-center justify-between">

            <button
              type="submit"
              className="inline-block rounded-lg bg-primaria px-5 py-3 text-sm font-medium text-white"
            >
              Enviar
            </button>
          </div>
        </form>
      </div>






    </>
  )
}


