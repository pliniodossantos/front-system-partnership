import { BACKEND_URL } from "../../assets/config";
import axios from "axios";



function formDataToJsonMapper(email) {
  let formatedData = {
    email: email
  };
  return JSON.stringify(formatedData)
}
async function formHandle(e) {
  e.preventDefault();
  const email = e.target.email.value;
  const jsonData = formDataToJsonMapper(email);
  const axiosConfig = { headers: { 'Content-Type': 'application/json' } };
  try {
    await axios.post(BACKEND_URL + '/stores/password/forgot', jsonData, axiosConfig)
    window.location = '/store/password/reset'
    alert('Email enviado com sucesso!')

  }
  catch (error) {
    alert(error.response.data.message)
  }


}


export default function ForgotPasswordStoreStep1() {
  return (
    <>

      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-lg text-center">
          <h1 className="text-2xl font-bold sm:text-3xl">Redefinição de senha - Loja</h1>

          <p className="mt-4 text-gray-500">
            Passo 1 Insira seu e-mail de cadastro, será enviado um token de validação para redefinir a senha.
          </p>
        </div>

        <form onSubmit={async function (e) { await formHandle(e) }} className="mx-auto mb-0 mt-8 max-w-md space-y-4">
          <div>
            <label htmlFor="email" className="sr-only">Email</label>

            <div className="relative">
              <input
                required
                name="email"
                type="email"
                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="Enter email"
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
            <button
              type="submit"
              className="inline-block rounded-lg bg-primaria px-5 py-3 text-sm font-medium text-white ml-auto" >
              Enviar
            </button>
          </div>
        </form>
      </div>

    </>
  )
}


