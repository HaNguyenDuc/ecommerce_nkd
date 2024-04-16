import React from "react";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Cart from "./pages/Cart";
import Product from "./pages/Product";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Success from "./pages/Success";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import { useSelector } from "react-redux";
function App() {
  const user = useSelector((state) => state.user.currentUser);
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>

        <Route
          exact
          path="/products/:category"
          element={<ProductList />}
        ></Route>
        <Route exact path="/product/:id" element={<Product />}></Route>
        <Route exact path="/products" element={<ProductList />}></Route>
        {/* <Route exact path="/cart" element={<Cart />}></Route> */}
        <Route
          exact
          path="/cart"
          element={!user ? <Navigate to="/login" /> : <Cart />}
        ></Route>
        <Route exact path="/success" element={<Success />}></Route>
        <Route exact path="/logout" element={<Login />}></Route>
        <Route
          exact
          path="/login"
          element={user ? <Navigate to="/" /> : <Login />}
        ></Route>
        <Route
          exact
          path="/register"
          element={user ? <Navigate to="/" /> : <Register />}
        ></Route>
      </Routes>
    </Router>
  );
}

export default App;
