import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router"
import { CreateCustomer, LoginCustomer, ForgotPasswordCustomerStep1, ForgotPasswordCustomerStep2, CreateConsulant, LoginConsulant, CreateStore, LoginStore, ForgotPasswordConsulantStep1, ForgotPasswordConsulantStep2, ForgotPasswordStoretStep1, ForgotPasswordStoreStep2, HomeCustomer, HomeConsulant, HomeStore, ProfileCustomer, PointsCustomer, UpdatePasswordCustomer, ProfileConsulant, CreateOrder, PointsConsulant, UpdateStoreConsulant, UpdatePasswordConsulant, ProfileStore, PointsStore, UpdatePasswordStore, DisabledAccountCustomer, DisabledAccountStore, DisabledAccountConsulant, LoginAdmin, CreateAdminStep1, CreateAdminStep2, HomeAdmin, ProfileAdmin, DeleteAccountAdmin, UpdatePasswordAdmin, ForgotPasswordAdminStep1, ForgotPasswordAdminStep2, AdminCustomers, AdminCustomersEdit, AdminStores, AdminStoresEdit, AdminConsulants, AdminConsulantsEdit, PointsAdmin, PointsAdminShow, PointsAdminPending, PointsAdminChose, PointsAdminCreate, PointsAdminConsulant, PointsAdminConsulantOrders, PointsAdminCustomer, PointsAdminCustomersOrders, PointsAdminStore, PointsAdminStoreOrders, About, MeetPartners, Award } from "./pages"
import HomeLanding from './pages/landing/HomeLanding'
function App() {

  return (
    <>
      <Router>

        <Routes>

          <Route path="/customer" element={<HomeCustomer />} />
          <Route path="/customer/profile" element={<ProfileCustomer />} />
          <Route path="/customer/points" element={<PointsCustomer />} />
          <Route path="/customer/password/update" element={<UpdatePasswordCustomer />} />
          <Route path="/customer/account/disabled" element={<DisabledAccountCustomer />} />
        
          <Route path="/create/customer" element={<CreateCustomer />} />
          <Route path="/login/customer" element={<LoginCustomer />} />
          <Route path="/customer/password/forgot" element={<ForgotPasswordCustomerStep1 />} />
          <Route path="/customer/password/reset" element={<ForgotPasswordCustomerStep2 />} />

          <Route path="/create/consulant" element={<CreateConsulant />} />
          <Route path="/login/consulant" element={<LoginConsulant />} />
          <Route path="/consulant/password/forgot" element={<ForgotPasswordConsulantStep1 />} />
          <Route path="/consulant/password/reset" element={<ForgotPasswordConsulantStep2 />} />

          <Route path="/consulant" element={<HomeConsulant />} />
          <Route path="/consulant/profile" element={<ProfileConsulant />} />
          <Route path="/consulant/order" element={<CreateOrder />} />
          <Route path="/consulant/points" element={<PointsConsulant />} />
          <Route path="/consulant/updatestore" element={<UpdateStoreConsulant />} />
          <Route path="/consulant/password/update" element={<UpdatePasswordConsulant />} />
          <Route path="/consulant/account/disabled" element={<DisabledAccountConsulant />} />


          <Route path="/create/store" element={<CreateStore />} />
          <Route path="/login/store" element={<LoginStore />} />
          <Route path="/store/password/forgot" element={<ForgotPasswordStoretStep1 />} />
          <Route path="/store/password/reset" element={<ForgotPasswordStoreStep2 />} />
         
          <Route path="/store" element={<HomeStore />} />
          <Route path="/store/profile" element={<ProfileStore />} />
          <Route path="/store/points" element={<PointsStore />} />
          <Route path="/store/password/update" element={<UpdatePasswordStore />} />
          <Route path="/store/account/disabled" element={<DisabledAccountStore />} />

          <Route path="/login/admin" element={<LoginAdmin />} />
          <Route path="/create/admin/send" element={<CreateAdminStep1 />} />
          <Route path="/create/admin/create" element={<CreateAdminStep2 />} />

          <Route path="/admin" element={<HomeAdmin />} />
          <Route path="/admin/profile" element={<ProfileAdmin />} />
          <Route path="/admin/account/delete" element={<DeleteAccountAdmin />} />
          <Route path="/admin/password/update" element={<UpdatePasswordAdmin />} />
          <Route path="/admin/password/forgot" element={<ForgotPasswordAdminStep1 />} />
          <Route path="/admin/password/reset" element={<ForgotPasswordAdminStep2 />} />
          <Route path="/admin/customers" element={<AdminCustomers />} />
          <Route path="/admin/customers/edit" element={<AdminCustomersEdit />} />
          <Route path="/admin/stores" element={<AdminStores />} />
          <Route path="/admin/stores/edit" element={<AdminStoresEdit />} />
          <Route path="/admin/consulants" element={<AdminConsulants />} />
          <Route path="/admin/consulants/edit" element={<AdminConsulantsEdit />} />
          <Route path="/admin/points" element={<PointsAdmin />} />
          <Route path="/admin/points/show" element={<PointsAdminShow />} />
          <Route path="/admin/points/pending" element={<PointsAdminPending />} />
          <Route path="/admin/points/create" element={<PointsAdminChose />} />
          <Route path="/admin/points/create/order" element={<PointsAdminCreate />} />
          <Route path="/admin/points/consulants" element={<PointsAdminConsulant />} />
          <Route path="/admin/points/consulant/order" element={<PointsAdminConsulantOrders />} />
          <Route path="/admin/points/customers" element={<PointsAdminCustomer />} />
          <Route path="/admin/points/customers/order" element={<PointsAdminCustomersOrders />} />
          <Route path="/admin/points/stores" element={<PointsAdminStore />} />
          <Route path="/admin/points/stores/order" element={<PointsAdminStoreOrders />} />

          <Route path="/" element={<HomeLanding />} />
          <Route path="/about" element={<About />} />
          <Route path="/meet" element={<MeetPartners />} />
          <Route path="/award" element={<Award />} />


        </Routes>

      </Router>




    </>

  )
}

export default App
