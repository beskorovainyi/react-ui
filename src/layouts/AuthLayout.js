import React from "react";
import AuthUser from "../views/AuthUser";
import Footer from "../components/Footer";
import Menu from "../components/Menu";
import RegistrationUser from "../views/RegistrationUser";


const AuthLayout = () => {

  return(
      <>
        <Menu />
        <AuthUser />
        <RegistrationUser />
        {/*<Footer />*/}
      </>
  )

}

export default AuthLayout