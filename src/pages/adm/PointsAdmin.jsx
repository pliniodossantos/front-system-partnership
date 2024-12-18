import "../../assets/home.css"
import Cookies from 'js-cookie'




export default function PointsAdmin() {
  if (!Cookies.get('AuthorizationAdmin')) {
    window.location = '/login/admin'
  }
  return (
    <>
      <header className="border-b-2 border-terciaria bg-primaria">
        <div className="mx-auto max-w-screen-xl sm: sm: lg:">
          <div className="flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
            <a href="/admin" className="ml-auto mr-auto">
              <img
                alt=""
                src="../logo.svg"
                className="size-40"
              />
            </a>
          </div>
        </div>
      </header>


      <div className="grid grid-cols-1 gap-4 m-20 md:m-40 lg:grid-cols-2 lg:gap-8">
        <div className="rounded-lg bg-gray-200">
          <a href="/admin/points/show">
            <article className="overflow-hidden rounded-lg shadow transition hover:shadow-lg">
              <img
                alt=""
                src="../list.jpg"
                className="h-56 w-full object-cover "
              />

              <div className="bg-white p-4 sm:p-6">
                <h3 className="mt-0.5 text-lg text-gray-900">Pontuações</h3>
                <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                 Confira um extrato com todas as pontuações já lançadas no sistema
                </p>
              </div>
            </article>
          </a>
        </div>
        <div className="rounded-lg bg-gray-200">
          <a href="/admin/points/pending">
            <article className="overflow-hidden rounded-lg shadow transition hover:shadow-lg">
              <img
                alt=""
                src="../stats.jpg"
                className="h-56 w-full object-cover "
              />

              <div className="bg-white p-4 sm:p-6">
                <h3 className="mt-0.5 text-lg text-gray-900">Pendentes</h3>
                <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                 Extrato com as pontuações pendentes de aprovação.
                </p>
              </div>
            </article>
          </a>
        </div>

        <div className="rounded-lg bg-gray-200">
          <a href="/admin/points/create">
            <article className="overflow-hidden rounded-lg shadow transition hover:shadow-lg">
              <img
                alt=""
                src="../throw.jpg"
                className="h-56 w-full object-cover "
              />

              <div className="bg-white p-4 sm:p-6">
                <h3 className="mt-0.5 text-lg text-gray-900">Lançar Pontuação</h3>
                <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                  Aqui você consegue lançar pontuações por um consultor cadastrado
                </p>
              </div>
            </article>
          </a>
        </div>

        <div className="rounded-lg bg-gray-200">
          <a href="/admin/points/customers">
            <article className="overflow-hidden rounded-lg shadow transition hover:shadow-lg">
              <img
                alt=""
                src="../clientes.jpg"
                className="h-56 w-full object-cover "
              />

              <div className="bg-white p-4 sm:p-6">
                <h3 className="mt-0.5 text-lg text-gray-900">Profissionais</h3>
                <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                  Verifica a pontuação de todos profissionais 
                </p>
              </div>
            </article>
          </a>
        </div>
        <div className="rounded-lg bg-gray-200">
          <a href="/admin/points/stores">
            <article className="overflow-hidden rounded-lg shadow transition hover:shadow-lg">
              <img
                alt=""
                src="../stores.jpg"
                className="h-56 w-full object-cover "
              />

              <div className="bg-white p-4 sm:p-6">
                <h3 className="mt-0.5 text-lg text-gray-900">Lojas</h3>
                <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                  Verifica a pontuação lançada por cada loja
                </p>
              </div>
            </article>
          </a>
        </div>
        <div className="rounded-lg bg-gray-200">
          <a href="/admin/points/consulants">
            <article className="overflow-hidden rounded-lg shadow transition hover:shadow-lg">
              <img
                alt=""
                src="../sales.jpg"
                className="h-56 w-full object-cover "
              />

              <div className="bg-white p-4 sm:p-6">
                <h3 className="mt-0.5 text-lg text-gray-900">Consultores</h3>
                <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                  Verifica todas as pontuações de cada consultor
                </p>
              </div>
            </article>
          </a>
        </div>
        <div className="rounded-lg bg-gray-200">
          <a href="/admin/points/decrease/customer">
            <article className="overflow-hidden rounded-lg shadow transition hover:shadow-lg">
              <img
                alt=""
                src="../decreaseCustomer.jpg"
                className="h-56 w-full object-cover "
              />

              <div className="bg-white p-4 sm:p-6">
                <h3 className="mt-0.5 text-lg text-gray-900">Lançar pontuação utilizada - Profissional</h3>
                <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                  Aqui você consegue lançar uma pontuação que se refere aos pontos já utilizados
                </p>
              </div>
            </article>
          </a>
        </div>
        <div className="rounded-lg bg-gray-200">
          <a href="/admin/points/decrease/consulant">
            <article className="overflow-hidden rounded-lg shadow transition hover:shadow-lg">
              <img
                alt=""
                src="../decreaseConsulant.jpg"
                className="h-56 w-full object-cover "
              />

              <div className="bg-white p-4 sm:p-6">
                <h3 className="mt-0.5 text-lg text-gray-900">Lançar pontuação utilizada - Consultor</h3>
                <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                  Aqui você consegue lançar uma pontuação que se refere aos pontos já utilizados
                </p>
              </div>
            </article>
          </a>
        </div>





      </div>


    </>
  )
}


