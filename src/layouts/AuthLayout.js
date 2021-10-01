import React from "react";
import AuthUser from "../views/AuthUser";
import Footer from "../components/Footer";
import Menu from "../components/Menu";


const AuthLayout = () => {

  return(
      <>
        <Menu />
        <AuthUser />
        <Footer />
      </>
  )

}

export default AuthLayout