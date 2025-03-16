
import { Navigate, Route, Routes } from "react-router-dom";
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
// import Menu from "./component/menu/MenuOLD";
import Menu from "./component/menu/Menu";
import MenuCart from "./component/menu/MenuCart";
import CakeSub from "./component/cake/CakeSub";
import CakeCat from "./component/cake/CakeCat";
import Cart from "./component/Cart";
import Order from "./component/Order";
import Checkout from "./component/razorpay/Checkout";
// import ProceedPage from "./component/menu/ProceedPage";

import './theme/css-component/style.css';
// ==========================
import ScrollToBottom from "./component/ScrollToBottom";
import BackToTop from "./component/BackToTop";
import Footer from "./component/reservation/Footer";
import Contact from "./component/Contact";
import Cake from "./component/cake/Cake";
import ForgotPassword from "./component/ForgotPassword";

import TermsAndConditions from "./component/TermsAndConditions";
import PrivacyPolicy from "./component/PrivacyPolicy";
import RefundPolicy from "./component/RefundPolicy";
import ShippingPolicy from "./component/ShippingPolicy";
import ReactGA from "react-ga4";


function App() {
  const isMaintenance = process.env.REACT_APP_MAINTENANCE_MODE === "true" || false;  //true means maintenance mode will on
  console.log("isMaintenance");
  console.log(isMaintenance);
  const ProtectedRoute = ({ children }) => {
    return isMaintenance ? <Navigate to="/" /> : children;
  };

  ReactGA.initialize(process.env.REACT_APP_GA_MID);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/navbar" element={<ProtectedRoute><Navbar /></ProtectedRoute>} />
        <Route path="/login"
          element={
            <ProtectedRoute>
              <Login />
            </ProtectedRoute>} />
        <Route path="/forgotpassword" element={<ProtectedRoute><ForgotPassword /></ProtectedRoute>} />
        <Route path="/galary" element={<ProtectedRoute><Galary /></ProtectedRoute>} />
        <Route path="/cake" element={<ProtectedRoute><Cake /></ProtectedRoute>} />
        <Route path="/galary_list" element={<ProtectedRoute><GalaryList /></ProtectedRoute>} />
        <Route path="/reservation" element={<ProtectedRoute><Reservation /></ProtectedRoute>} />
        <Route path="/sub_cat" element={<ProtectedRoute><SubCat /></ProtectedRoute>} />
        <Route path="/sub_cat_list" element={<ProtectedRoute><SubCatList /></ProtectedRoute>} />
        <Route path="/clt_cart/:paramResId/:paramResCatId/:paramResScatId" element={<ProtectedRoute><CltCart /></ProtectedRoute>} />
        <Route path="/tb_cart/:paramResId/:paramResCatId/:paramResScatId" element={<ProtectedRoute><TbCart /></ProtectedRoute>} />
        <Route path="/btb_cart/:paramResId/:paramResCatId/:paramResScatId" element={<ProtectedRoute><BtbCart /></ProtectedRoute>} />

        <Route path="/menu" element={<ProtectedRoute><Menu /></ProtectedRoute>} />
        <Route path="/menu_cart" element={<ProtectedRoute><MenuCart /></ProtectedRoute>} />
        <Route path="/cake_cat" element={<ProtectedRoute><CakeCat /></ProtectedRoute>} />
        <Route path="/cake_sub" element={<ProtectedRoute><CakeSub /></ProtectedRoute>} />
        <Route path="/checkout" element={<ProtectedRoute><Checkout /></ProtectedRoute>} />
        <Route path="/cart" element={<ProtectedRoute><Cart /></ProtectedRoute>} />
        <Route path="/order" element={<ProtectedRoute><Order /></ProtectedRoute>} />

        <Route path="/contact" element={<Contact />} />
        <Route path="/terms_condition" element={<TermsAndConditions />} />
        <Route path="/privacy_policy" element={<PrivacyPolicy />} />
        <Route path="/refund_policy" element={<RefundPolicy />} />
        <Route path="/shipping_policy" element={<ShippingPolicy />} />

      </Routes>
      <ScrollToBottom />
      <BackToTop />

      {/* <Cake_cart/> */}
      {/* <Menu_cart/> */}
      {/* <Sidebar /> */}
      {/* <Navbar/> */}
      {/* <Login/> */}

    </>
  );
}

export default App;
