import { BACKEND_URL } from "../../assets/config";
import axios from "axios";
import Cookies from 'js-cookie'


function formDataToJsonMapper(name, email, cpf, password, birthday, cnpjStore) {
  let formatedData = {
    name: name,
    email: email,
    cpf: cpf,
    password: password,
    birthday: birthday,
    cnpjStore: cnpjStore
  };
  return JSON.stringify(formatedData)
}

async function formHandle(e) {
  e.preventDefault();
  const name = e.target.name.value;
  const email = e.target.email.value;
  const cpf = e.target.cpf.value;
  const password = e.target.password.value;
  const birthday = e.target.birthday.value.replace(/-/g,"/");
  const cnpjStore = e.target.cnpjStore.value;

  const jsonData = formDataToJsonMapper(name, email, cpf, password, birthday, cnpjStore);

  const axiosConfig = { headers: { 'Content-Type': 'application/json' } };


  try {
    await axios.post(BACKEND_URL + '/consulants', jsonData, axiosConfig)
      .then((response) => Cookies.set('AuthorizationConsulant', response.data.token, {
        expires: 5
      }))
    window.location = '/consulant'

  }
  catch (error) {
    alert(error.response.data.message)
  }
}




export default function CreateConsulant() {
  if (Cookies.get('AuthorizationConsulant')) {
    window.location = '/consulant'
  }
  return (
    <>
      <section className="bg-primaria">
        <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
          <section className="relative flex h-32 items-end bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6">
            <img
              alt=""
              src="../consulant.jpg"
              className="absolute inset-0 h-full w-full object-cover opacity-80"
            />

            <div className="hidden lg:relative lg:block lg:p-12">

              <h2 className="mt-6 text-2xl font-bold text-white sm:text-3xl md:text-4xl">
                Bem vindo ao Partnership - Consultor
              </h2>

              <p className="mt-4 leading-relaxed text-white/90 underline">
                Muito mais que um programa de pontuação, estimamos a parceria e o cuidado do relacionamento profissional.
              </p>
            </div>
          </section>

          <main
            className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6"
          >
            <div className="max-w-xl lg:max-w-3xl">
              <div className="relative -mt-16 block lg:hidden">

                <h1 className="mt-10 text-2xl font-bold text-white sm:text-3xl md:text-4xl">
                  Bem vindo ao Partnership - Consultor
                </h1>

                <p className="mt-4 leading-relaxed text-gray-300">
                  Muito mais que um programa de pontuação, estimamos a parceria e o cuidado do relacionamento profissional.

                </p>
              </div>

              <form onSubmit={async function (e) { await formHandle(e) }} className="mt-8 grid grid-cols-6 gap-6">
                <div className="col-span-6 sm:col-span-3">
                  <label htmlFor="FirstName" className="block text-sm font-medium text-white">
                    Nome
                  </label>

                  <input
                    required
                    type="text"
                    id="FirstName"
                    name="name"
                    className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                  />
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <label htmlFor="FirstName" className="block text-sm font-medium text-white">
                    Cpf
                  </label>

                  <input
                    required
                    type="text"
                    id="FirstName"
                    name="cpf"
                    className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                  />
                </div>


                <div className="col-span-6">
                  <label htmlFor="Email" className="block text-sm font-medium text-white"> Email </label>

                  <input
                    required
                    type="email"
                    id="Email"
                    name="email"
                    className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                  />
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label htmlFor="Password" className="block text-sm font-medium text-white"> Senha </label>

                  <input
                    required
                    type="password"
                    id="Password"
                    name="password"
                    className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                  />
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <label htmlFor="LastName" className="block text-sm font-medium text-white">
                    Data de Nascimento
                  </label>

                  <input
                    required
                    type="date"
                    id="LastName"
                    name="birthday"
                    className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                  />
                </div>
                <div className="col-span-6">
                  <label htmlFor="complement" className="block text-sm font-medium text-white"> Cnpj da loja </label>

                  <input
                    required
                    type="text"
                    id=""
                    name="cnpjStore"
                    className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"

                  />
                </div>

                <div className="col-span-6">
                  <label htmlFor="MarketingAccept" className="flex gap-4">
                    <input
                      type="checkbox"
                      id="MarketingAccept"
                      name="marketing_accept"
                      className="size-5 rounded-md border-gray-200 bg-white shadow-sm text-terciaria rounded focus:ring-terciaria"
                      required
                    />

                    <span className="text-sm text-gray-300">
                      Aceito receber e-mails sobre novidades, eventos e notificações.
                    </span>
                  </label>
                </div>

                <div className="col-span-6">
                  <p className="text-sm text-gray-300">
                    Ao criar sua conta, você aceita nossos
                    <a href="#" className="text-gray-400 underline"> termos e condições. </a>

                  </p>
                </div>

                <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                  <button
                    className="inline-block shrink-0 rounded-md border border-secundaria bg-secundaria px-12 py-3 text-sm font-medium text-white transition hover:bg-secundaria hover:text-primaria focus:outline-none focus:ring active:text-terciaria"
                  >
                    Criar conta
                  </button>

                  <p className="mt-4 text-sm text-gray-300 sm:mt-0">
                    Já tem uma conta?
                    <a href="/login/consulant" className="text-gray-400   underline"> Log in</a>.
                  </p>
                </div>
              </form>
            </div>
          </main>
        </div>
      </section>

    </>
  )
}


