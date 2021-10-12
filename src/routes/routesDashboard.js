import Dashboard from "../views/Dashboard"
import Page_1 from "../views/Page_1";

const routesDashboard = [
  {
    path: "/",
    layout: "dashboard",
    name: "Dashboard",
    state: "",
    component: Dashboard
  },
  {
    path: "/page_1",
    layout: "dashboard",
    name: "Page 1",
    state: "",
    component: Page_1
  }
]

export default routesDashboard