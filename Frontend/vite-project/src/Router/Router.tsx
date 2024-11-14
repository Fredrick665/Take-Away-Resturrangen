import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
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
import UpdatePage from "../pages/UpdatePage/UpdatePage";

function Router() {
  return (
    <BrowserRouter>
      <Link to="/add-item">Add Item</Link>
      <Link to="/all-orders">All Orders</Link>
      <Link to="/cart">Cart</Link>
      <Link to="/confirmed-orders">Confirmed Orders</Link>
      <Link to="/edit-items">Edit Items</Link>
      <Link to="/order-history">Order History</Link>
      <Link to="/order">Order</Link>
      <Link to="/profile">Profile</Link>
      <Link to="/Admin">Admin</Link>
      <Link to="/single-order">Single Order</Link>
      <Link to="/about">About</Link>
      <Link to="/update">UpdatePage</Link>
      <Routes>
        <Route path="/add-item" element={<AddItemPage />} />
        <Route path="/all-orders" element={<AllOrdersPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/confirmed-orders" element={<ConfirmedOrdersPage />} />
        <Route path="/edit-items" element={<EditItemsPage />} />
        <Route path="/order-history" element={<OrderHistoryPage />} />
        <Route path="/order" element={<OrderPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/Admin" element={<Adminpage />} />
        <Route path="/single-order" element={<SingleOrderPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/update" element={<UpdatePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
