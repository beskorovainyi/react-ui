import LoginUser from "../views/LoginUser";
import RegistrationUser from "../views/RegistrationUser";


const routesAuth = [
  {
    path: "/login",
    layout: "/auth",
    name: "Login Page",
    component: LoginUser
  },
  {
    path: "/registration",
    layout: "/auth",
    name: "Registration Page",
    component: RegistrationUser
  }
]

export default routesAuth