import React, { useEffect } from 'react';
import 'react-notifications-component/dist/theme.css'
// import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import LayOutWebsite from './component/Layout';
import HomePage from './page/Home';
import ProductPage from './page/ProductPage';
import CartPage from './page/CartPage';
import LoginPage from './page/Login';
import LayoutAdmin from './component/admin/LayoutAdmin';
import AdminPage from './page/Admin/AdminPage';
import ProductAdminPage from './page/Admin/ProductAdminPage';
import AddProduct from './component/admin/AddProducts';
import ProductDetail from './page/ProductDetail/ProductDetail';
import CategoriesAmin from './page/Admin/CategoriesAmin';
import AddCategories from './component/admin/AddCategories';
import OderPage from './page/OderPage';
import firebase from './firebase/firebase';
import Myoder from './page/OderPage/Myoder';
import ListOderPage from './page/Admin/ListOderPage';
import CategoryProductPage from './page/CategoriesPage/CategoryProductPage';
function App() {
  useEffect(() => {
    getDeviceTokens();
  }, [])
  const getDeviceTokens = async () => {
    try {
      const messaging = firebase.messaging();
      await messaging.requestPermission();
      const token = await messaging.getToken();
      console.log('token:', token);
      return token;
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* LayoutWebsite */}
          <Route path="/*" element={<LayOutWebsite />}>
            <Route index element={<HomePage />} />
            <Route path='products' element={<ProductPage />} />
            <Route path='carts' element={<CartPage />} />
            <Route path="products/:id" element={<ProductDetail />} />
            <Route path="checkout/:price" element={<OderPage />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="oder" element={<Myoder />} />
            <Route path="categories/:id" element={<CategoryProductPage />} />
          </Route>

          {/* LayoutAdmin */}
          <Route path="admin/*" element={<LayoutAdmin />}>
            <Route index element={<AdminPage />} />
            <Route path='list-products' element={<ProductAdminPage />} />
            <Route path='add-products' element={<AddProduct />} />
            <Route path='list-categories' element={<CategoriesAmin />} />
            <Route path='addCategory' element={<AddCategories />} />
            <Route path='list-oders' element={<ListOderPage />} />
          </Route>

          {/* <Route path="err-500" element={<ServeErrorPage />} />
          <Route path="register" element={<RegisterPage />} /> */}
        </Routes>
      </BrowserRouter>,
    </div>
  );
}

export default App;
