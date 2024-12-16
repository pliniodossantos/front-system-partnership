import { BACKEND_URL } from "../../assets/config";
import axios from "axios";



async function formHandle(e) {
  e.preventDefault();
  try {
    await axios.post(BACKEND_URL + '/admin/send',)
    window.location = '/create/admin/create'
    alert('Email enviado com sucesso!')

  }
  catch (error) {
    alert(error.response.data.message)
  }


}


export default function ForgotPasswordCustomerStep1() {
  return (
    <>

      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-lg text-center">
          <h1 className="text-2xl font-bold sm:text-3xl">Enviar Solicitação</h1>

          <p className="mt-4 text-gray-500">
            Um email será enviado para o adm principal, solice junto ao mesmo sua "Key-Access"
          </p>
        </div>

        <form onSubmit={async function (e) { await formHandle(e) }} className="mx-auto mb-0 mt-8 max-w-md space-y-4">
          



          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="inline-block rounded-lg bg-primaria px-5 py-3 text-sm font-medium text-white ml-auto mr-auto" >
              Enviar
            </button>
          </div>
        </form>
      </div>

    </>
  )
}


