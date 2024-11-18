import { Routes, Route } from "react-router-dom";
import AboutPage from "../pages/AboutPage/AboutPage";
import AddItemPage from "../pages/AddItemPage/AddItemPage";
import AllOrdersPage from "../pages/AllOrdersPage/AllOrdersPage";
import CartPage from "../pages/CartPage/CartPage";
import ConfirmedOrdersPage from "../pages/ConfirmedOrdersPage/ConfirmedOrdersPage";
import EditItemsPage from "../pages/EditItemsPage/EditItemsPage";
import OrderHistoryPage from "../pages/OrderHistoryPage/OrderHistoryPage";
import OrderPage from "../pages/OrderPage/OrderPage";
import ProfilePage from "../pages/ProfilePage/ProfilePage";
import Adminpage from "../pages/AdminPage/Adminpage";
import SingleOrderPage from "../pages/SingleOrderPage/SingleOrderPage";
import RegisterPage from "../pages/RegisterPage/RegisterPage";
import LoginPage from "../pages/LoginPage/LoginPage";
import UpdatePage from "../pages/UpdatePage/UpdatePage";
import Startpage from "../pages/StartPage/Startpage";
import HomePage from "../pages/HomePage/HomePage";

function Router() {
  return (
    <Routes>
      <Route path="/additem" element={<AddItemPage />} />
      <Route path="/allorders" element={<AllOrdersPage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/confirmedorders" element={<ConfirmedOrdersPage />} />
      <Route path="/edititems" element={<EditItemsPage />} />
      <Route path="/orderhistory" element={<OrderHistoryPage />} />
      <Route path="/order" element={<OrderPage />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/Admin" element={<Adminpage />} />
      <Route path="/singleorder" element={<SingleOrderPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/update" element={<UpdatePage />} />
      <Route path="/start" element={<Startpage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/Homepage" element={<HomePage />} />
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
}

export default Router;
// Författare Fredrick.
