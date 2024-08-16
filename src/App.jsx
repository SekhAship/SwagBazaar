import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Home from "./pages/home/Home";
import Order from "./pages/order/Order";
import NoPage from "./pages/noPage/NoPage";
import MyState from "./context/data/MyState";
import ProductInfo from "./pages/productInfo/ProductInfo";
import ScrollTop from "./components/scrollTop/ScrollTop";
import CartPage from "./pages/cart/Cart";
import AllProducts from "./pages/allProducts/AllProducts";
import SignUp from "./pages/registration/SignUp";
import Login from "./pages/registration/Login";
import UserDashboard from "./pages/user/UserDashboard";
import AdminDashboard from "./pages/admin/dashbboard/AdminDashboard";
import AddProductPage from "./pages/admin/dashbboard/AddProductPage";
import UpdateProductPage from "./pages/admin/dashbboard/UpdateProductPage";
import { Toaster } from "react-hot-toast";
import { ProtectedRouteForUser } from "./protectedRoute/ProtectedRouteForUser";
import { ProtectedRouteForAdmin } from "./protectedRoute/ProtectedRouteForAdmin";
import CategoryPage from "./pages/category/CategoryPage";
import BuyNowModal from "./components/buyNowModal/BuyNowModal";


const App = () => {
  return (
    <MyState>


    
      <Router>
        <ScrollTop/>
          <Toaster/>

        <Routes>
        <Route path="/buynow" element={<BuyNowModal/>} />
          <Route path="/" element={<Home/>} />
          <Route path="/order" element={<Order/>} />
          <Route path="/productinfo/:id" element={<ProductInfo/>} />
          <Route path="/allproduct" element={<AllProducts/>} />
          <Route path="/signup" element={<SignUp/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/cartpage" element={<CartPage/>} />
          <Route path="/*" element={<NoPage/>} />
          <Route path="/category/:categoryname" element={<CategoryPage/>} />

          <Route path="/user-dashboard" element={
            <ProtectedRouteForUser>
              <UserDashboard/>
            </ProtectedRouteForUser>          } />
          <Route path="/admin-dashboard" element={
            <ProtectedRouteForAdmin>
              <AdminDashboard/>
            </ProtectedRouteForAdmin>
          } />
          <Route path="/addproduct" element={
            <ProtectedRouteForAdmin>
           <AddProductPage/>
          </ProtectedRouteForAdmin>
            } />
          <Route path="/updateproduct/:id" element={
         <ProtectedRouteForAdmin>
        <UpdateProductPage/>
        </ProtectedRouteForAdmin>
        } />

        </Routes>
      </Router>
    </MyState>
  );
}

export default App;