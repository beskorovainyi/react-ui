import React from "react";
import LoginUser from "../views/LoginUser";
import Footer from "../components/Footer";
import Menu from "../components/Menu";
import RegistrationUser from "../views/RegistrationUser";


const AuthLayout = () => {

  return (
      <>
        <Menu />
        <LoginUser />
        <RegistrationUser />
        <Footer />
      </>
  )
}

export default AuthLayout