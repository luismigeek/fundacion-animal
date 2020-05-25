import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Form from "../components/Form";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";

const Layout = (props) => (
  <div className="Layout">
    <Header />
    <Home />
    <Footer />
    <Form />
    <Login />
    <Dashboard />
  </div>
);

export default Layout;
