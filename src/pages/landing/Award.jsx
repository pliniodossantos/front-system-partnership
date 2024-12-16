import "../../assets/award.css"
import { Carousel } from "@material-tailwind/react";


async function formHandle(e) {
  e.preventDefault();
  var url = document.getElementById("links");
  window.location = url.options[url.selectedIndex].value

}


export default function Award() {



  return (
    <>

      <header>
        <nav class="bg-primaria border-gray-200 px-4 lg:px-6 py-2.5">
          <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
            <div class="ml-auto mr-auto sm:ml-auto sm:mr-auto md:ml-auto md:mr-auto lg:mr-0 order-1 flex items-center lg:order-2">
              <select name="" id="links" className="bg-secundaria rounded-md" onChange={async function (e) { await formHandle(e) }}>
                <option className="text-primaria" value="">Area de Login</option>
                <option className="text-primaria" value="/login/customer">Profissional</option>
                <option className="text-primaria" value="/login/consulant">Consultor</option>
                <option className="text-primaria" value="/login/store">Loja</option>
              </select>

            </div>
            <div class="justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
              <ul class="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                <li className="ml-auto mr-auto">
                  <a href="/" class="block py-2 pr-4 pl-3 text-gray-400 rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white" aria-current="page">Home</a>
                </li>
                <li className="ml-auto mr-auto">
                  <a href="/about" class="block py-2 pr-4 pl-3 text-gray-400 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Quem Somos</a>
                </li>
                <li className="ml-auto mr-auto">
                  <a href="/meet" class="block py-2 pr-4 pl-3 text-gray-400 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Conheça nossos parceiros</a>
                </li>
                <li className="ml-auto mr-auto">
                  <a href="/award" class="block py-2 pr-4 pl-3 text-white border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Premiações</a>
                </li>

              </ul>
            </div>
          </div>
        </nav>
      </header>
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="space-y-4 md:space-y-8">
            <div className="max-w-xl">
              <h2 className="text-2xl font-semibold text-gray-900 sm:text-3xl">
                Premiações
              </h2>

              <p className="mt-4 text-gray-800 underline">
                Confira algumas das premiações do partnership:
              </p>
            </div>

            <Carousel className="rounded-xl">
              <img
                src="carro1.jpg"
                alt="image 1"
                className="h-full w-full object-cover"
              />
              <img
                src="carro2.jpg"
                alt="image 1"
                className="h-full w-full object-cover"
              />
              <img
                src="carro3.jpg"
                alt="image 1"
                className="h-full w-full object-cover"
              />
              <img
                src="carro4.jpg"
                alt="image 1"
                className="h-full w-full object-cover"
              />
            </Carousel>


          </div>
        </div>
      </section>
      <section className="bg-primaria">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:items-center md:gap-8">
            <div>
              <div className="max-w-lg md:max-w-none">
                <h2 className="text-2xl font-semibold text-white sm:text-3xl">
                  Acelera Partnership
                </h2>

                <p className="mt-4 text-secundaria">
                  São premiações que poderão ocorrer durante o andamento
                  da campanha PARTNERSHIP vigente, acelerando ainda mais
                  a sua chance de viver experiências fantásticas com resgate
                  imediato, e o melhor, sem que seja descontado qualquer
                  ponto da sua jornada dentro do programa.
                </p>
              </div>
            </div>

            <div>

              <Carousel className="rounded-xl">
                <img
                  src="carrob1.png"
                  alt="image 1"
                  className="h-full w-full object-cover"
                />
                <img
                  src="carrob2.png"
                  alt="image 1"
                  className="h-full w-full object-cover"
                />
                <img
                  src="carrob3.png"
                  alt="image 1"
                  className="h-full w-full object-cover"
                />
              </Carousel>

            </div>
          </div>
        </div>
      </section>
      <section>
  <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
    

      <img
        src="part.jpg "
        className="rounded"
        alt=""
      />
    
  </div>
</section>
    </>
  )
}


