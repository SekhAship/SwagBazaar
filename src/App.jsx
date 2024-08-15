import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Home from "./pages/home/Home";
import Order from "./pages/order/Order";
import Cart from "./pages/cart/Cart";
import Dashboard from "./pages/admin/dashbboard/Dashboard";
import NoPage from "./pages/noPage/NoPage";
import MyState from "./context/data/myState";
import ProductInfo from "./pages/productInfo/ProductInfo";


const App = () => {
  return (
    <MyState>


    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/order" element={<Order/>} />
          <Route path="/productinfo" element={<ProductInfo/>} />
          
          <Route path="/cart" element={<Cart/>} />
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="/*" element={<NoPage/>} />

        </Routes>
      </Router>
    </div>
    </MyState>
  );
}

export default App;