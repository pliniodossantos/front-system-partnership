import "../../assets/landindHome.css"



async function formHandle(e) {
    e.preventDefault();
    var url = document.getElementById("links");
    window.location = url.options[url.selectedIndex].value

}


export default function About() {



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
                  <a href="/about" class="block py-2 pr-4 pl-3 text-white border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Quem Somos</a>
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

            <section className="mt-12">
                <div className="mx-auto w-max px-4 py-8 sm:px-6 lg:px-8">
                    <div className="space-y-4 md:space-y-8">
                        <div className="max-w-xl">
                            <h2 className="text-2xl font-semibold text-gray-900 sm:text-3xl">
                                O QUE É PARTNERSHIP?
                            </h2>

                            <p className="mt-4 text-gray-700 text-xl w-fit">
                                Um programa de pontuação que preza pela parceria,
                                onde o principal objetivo é cuidar do relacionamento
                                comercial, pois acreditamos ser fundamental para impulsionar o
                                crescimento e o sucesso em um mercado cada vez mais competitivo e dinâmico.
                            </p>
                        </div>

                    </div>
                </div>
            </section>

            <section className="bg-primaria">
                <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:items-center md:gap-8">
                        <div>
                            <div className="max-w-lg md:max-w-none">
                                <h2 className="text-2xl font-semibold text-white sm:text-3xl">
                                    PARCERIAS SÓLIDAS GERAM RESULTADOS
                                </h2>

                                <p className="mt-4 text-secundaria">
                                    Ao estabelecer parcerias estratégicas, é possível combinar
                                    recursos, conhecimentos e experiências para alcançar objetivos
                                    comuns de forma mais eficiente e eficaz. Além disso, as parcerias
                                    oferecem oportunidades de aprendizado e inovação, permitindo
                                    que as empresas aproveitem novas ideias e perspectivas para
                                    impulsionar a criatividade e a adaptação às mudanças do mercado.
                                    Portanto, temos plena convicção que investir em parcerias sólidas e
                                    colaborativas é um diferencial significativo para o crescimento
                                    sustentável e a competitividade no cenário empresarial atual.
                                </p>
                            </div>
                        </div>

                        <div>
                            <img
                                src="clientes.jpg"
                                className="rounded"
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </section>


            <section className="">
                <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:items-center md:gap-8">
                        <div>
                            <img
                                src="sale.jpg"
                                className="rounded"
                                alt=""
                            />
                        </div>
                        <div>
                            <div className="max-w-lg md:max-w-none">
                                <h2 className="text-2xl font-semibold text-Primaria sm:text-3xl">
                                    CAMPANHA
                                </h2>

                                <p className="mt-4 text-gray-700">
                                    adotamos um plano de reconhecimento onde você é dono dos seus pontos,
                                    e poderá usar da forma que achar conveniente,
                                    tendo um periodo de 18 meses para acúmulo desses pontos,
                                    então, a cada r$1,00 gasto nas lojas parceiras <span className="underline">VOCÊ GANHA 1 PONTO (R$1,00=1PONTO),
                                        E VOCÊ NÃO DEPENDE DE SORTEIOS OU ESTAR ENTRE OS MAIS PONTUADOS PARA RECEBER SEU PRÊMIO. </span>
                                </p>
                            </div>
                        </div>


                    </div>
                </div>
            </section>

            <section className="bg-primaria">
                <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:items-center md:gap-8">
                        <div>
                            <div className="max-w-lg md:max-w-none">
                                <h2 className="text-2xl font-semibold text-white sm:text-3xl">
                                    QUEM PODERÁ PARTICIPAR ?
                                </h2>

                                <p className="mt-4 text-secundaria text-xl w-fit">
                                <p className="mb-3">   . Arquitetos(a) <br /></p>
                                <p className="mb-3">   . Designers <br /> </p>
                                <p>   . Engenheiros(a) <br /></p>

                            </p>
                            <h2 className="text-2xl font-semibold text-white sm:text-3xl mt-5 underline">
                                    <a href="/create/customer">Vamos começar?</a>
                                </h2>
                            </div>
                        </div>
                            
                        <div>
                            <img
                                src="question.jpg"
                                className="rounded"
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}


