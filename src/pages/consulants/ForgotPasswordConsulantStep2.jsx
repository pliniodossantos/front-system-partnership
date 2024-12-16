import { BACKEND_URL } from "../../assets/config";
import axios from "axios";



function formDataToJsonMapper(token, password, password_confirmation) {
  let formatedData = {
    token: token,
    password: password,
    password_confirmation: password_confirmation
  };
  return JSON.stringify(formatedData)
}
async function formHandle(e) {
  e.preventDefault();
  const token = e.target.token.value;
  const password = e.target.password.value;
  const password_confirmation = e.target.password_confirmation.value;
  const jsonData = formDataToJsonMapper(token, password, password_confirmation);
  const axiosConfig = { headers: { 'Content-Type': 'application/json' } };
  try {
    await axios.patch(BACKEND_URL + '/consulants/password/reset', jsonData, axiosConfig)
    window.location = '/login/consulant'
    alert('Senha alterada com sucesso')

  }
  catch (error) {
    alert(error.response.data.message)
  }}



export default function ForgotPasswordConsulantStep2() {
  return (
    <>
      
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-lg text-center">
          <h1 className="text-2xl font-bold sm:text-3xl">Redefinição de senha - Consultor</h1>

          <p className="mt-4 text-gray-500">
          Passo 2 Insira o token recebido por email, uma nova senha e sua confirmação.
          </p>
        </div>

        <form onSubmit={async function (e) { await formHandle(e) }} className="mx-auto mb-0 mt-8 max-w-md space-y-4">
          <div>
            <label htmlFor="" className="sr-only"></label>

            <div className="relative">
              <input
                type="text"
                name="token"
                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="Token"
              />

            </div>
          </div>
          <div>
            <label htmlFor="email" className="sr-only">Senha</label>

            <div className="relative">
              <input
                type="password"
                name="password"
                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="Nova senha"
              />

            </div>
          </div>
          <div>
            <label htmlFor="email" className="sr-only">Email</label>

            <div className="relative">
              <input
                type="password"
                name="password_confirmation"
                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="Confirmar senha"
              />

            </div>
          </div>

          

          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="inline-block rounded-lg bg-primaria px-5 py-3 text-sm font-medium text-white ml-auto" >
              Atualizar
            </button>
          </div>
        </form>
      </div>

    </>
  )
}


