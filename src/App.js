
import { Route, Routes } from "react-router-dom";
import Login from "./component/Login";
import Navbar from "./component/Navbar";
import Home from "./component/Home";
import Galary from "./component/galary/Galary";
import GalaryList from "./component/galary/GalaryList";
import Reservation from "./component/reservation/Reservation";
import SubCat from "./component/reservation/SubCat";
import SubCatList from "./component/reservation/SubCatList";
import CltCart from "./component/reservation/CltCart";
import TbCart from "./component/reservation/TbCart";
import BtbCart from "./component/reservation/BtbCart";
import Menu from "./component/menu/Menu";
import MenuCart from "./component/menu/MenuCart";
import CakeSub from "./component/cake/CakeSub";
import CakeCat from "./component/cake/CakeCat";
import Cart from "./component/Cart";
import Order from "./component/Order";
import Checkout from "./component/razorpay/Checkout";
// import ProceedPage from "./component/menu/ProceedPage";

// ==========================

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/navbar" element={<Navbar />} />
        <Route path="/login" element={<Login />} />
        <Route path="/galary" element={<Galary />} />
        <Route path="/galary_list" element={<GalaryList />} />
        <Route path="/reservation" element={<Reservation />} />
        <Route path="/sub_cat" element={<SubCat />} />
        <Route path="/sub_cat_list" element={<SubCatList />} />
        <Route path="/clt_cart" element={<CltCart />} />
        <Route path="/tb_cart" element={<TbCart />} />
        <Route path="/btb_cart" element={<BtbCart />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/menu_cart" element={<MenuCart />} />
        <Route path="/cake_cat" element={<CakeCat />} />
        <Route path="/cake_sub" element={<CakeSub />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/order" element={<Order />} />
      </Routes>


      {/* <Cake_cart/> */}
      {/* <Menu_cart/> */}
      {/* <Sidebar /> */}
      {/* <Navbar/> */}
      {/* <Login/> */}

    </>
  );
}

export default App;
