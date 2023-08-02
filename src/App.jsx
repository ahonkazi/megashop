import { Navigate, Route, Routes } from 'react-router-dom'
import './App.scss'
import { Admin, Checkout, EditProfile, HomePage, Login, ProductDetails, ProfilePage, Registration, Search, Signup, WishList } from './route/route'
import AdminCategory from './Admin/pages/category/AdminCategory'
import AdminProduct from './Admin/pages/product/AdminProduct'
function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/search' element={<Search />} />
        <Route path='/product' element={<ProductDetails />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='/auth' element={<Registration />}>
          <Route path='signup' element={<Signup />} />
          <Route path='login' element={<Login />} />
        </Route>

        <Route path='/profile' element={<ProfilePage />}>
          <Route path='details' element={<h1>Details</h1>} />
          <Route path='message' element={<h1>Message</h1>} />
          <Route path='edit' element={<EditProfile />} />
          <Route path='wishlist' element={<WishList />} />
          <Route path='payment-setting' element={<h1>Payment Setting</h1>} />
          <Route path='prev-order' element={<h1>Prev Order </h1>} />
        </Route>

        <Route path='/admin' element={<Admin />}>
          <Route path='dashboard' element={<h1>Dashboard</h1>} />
          <Route path='category' element={<AdminCategory />} />
          <Route path='product' element={<AdminProduct />} />
          <Route path='brand' element={<h1>Brand</h1>} />
          <Route path='order' element={<h1>Order</h1>} />
          <Route path='settings' element={<h1>Settings</h1>} />
        </Route>

        <Route path='/*' element={<h1>404</h1>} />

      </Routes>

    </>
  )
}

export default App
