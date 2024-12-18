import aviator from "../../assets/aviator.jpg"


async function formHandle(e) {
  e.preventDefault();
  var url = document.getElementById("links");
  window.location = url.options[url.selectedIndex].value

}


export default function HomeLanding() {



  return (
    <>

      <header>
        <nav class="bg-primaria border-gray-200 px-4 lg:px-6 py-2.5">
          <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
            <div class="mt-2 ml-auto mr-auto sm:ml-auto sm:mr-auto md:ml-auto md:mr-auto lg:mr-0 order-1 flex items-center lg:order-2">
              <select name="" id="links" className="bg-secundaria rounded-md" onChange={async function (e) { await formHandle(e) }}>
                <option className="text-primaria" value="">Area de Login</option>
                <option className="text-primaria" value="/login/customer">Profissional</option>
                <option className="text-primaria" value="/login/consulant">Consultor</option>
                <option className="text-primaria" value="/login/store">Loja</option>
              </select>

            </div>
            <div class="mt-1 justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
              <ul class="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                <li className="ml-auto mr-auto">
                  <a href="#" class="block py-2 pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white" aria-current="page">Home</a>
                </li>
                <li className="ml-auto mr-auto">
                  <a href="/about" class="block py-2 pr-4 pl-3 text-gray-400 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Quem Somos</a>
                </li>
                <li className="ml-auto mr-auto">
                  <a href="/meet" class="block py-2 pr-4 pl-3 text-gray-400 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Conheça nossos parceiros</a>
                </li>
                <li className="ml-auto mr-auto">
                  <a href="/award" class="block py-2 pr-4 pl-3 text-gray-400 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Premiações</a>
                </li>

              </ul>
            </div>
          </div>
        </nav>
      </header>


      <section
        className={`relative bg-[url(/src/assets/aviator.jpg)] bg-cover bg-center bg-no-repeat`}
      >
        <div
          className="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"
        ></div>

        <div
          className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
        >
          <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
            <h1 className="text-3xl font-extrabold sm:text-5xl">
              Acumule Pontos com Facilidade

            </h1>

            <p className="mt-4 max-w-lg sm:text-xl/relaxed">
              Nosso programa permite que você acumule pontos de forma simples e rápida, impulsionando clientes e zelando pelo relacionamento comercial.
            </p>

            <div className="mt-8 flex flex-wrap gap-4 text-center">
              <a
                href="create/customer"
                className="block w-full rounded bg-primaria px-12 py-3 text-sm font-medium text-white shadow hover:bg-terciaria focus:outline-none focus:ring active:bg-terciaria sm:w-auto"
              >
                Vamos Começar
              </a>

              <a
                href="/about"
                className="block w-full rounded bg-secundaria px-12 py-3 text-sm font-medium text-primaria shadow hover:text-white focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
              >
                Saiba Mais
              </a>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}


