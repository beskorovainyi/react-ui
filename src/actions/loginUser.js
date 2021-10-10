import axios from "axios";
import keys from "../config/keys"
import config from "../config/config"

const body = {}

const loginUser = async (email, password) => {

  body.email = email
  body.password = password

  try {
    const response = await axios.post(keys.URLS.SERVER_URL + config.ENDPOINTS.LOGIN_USER, body)
    localStorage.setItem("access", response.data.access)
    console.log(response)
    return response
  } catch (error) {
    localStorage.removeItem("access")
    console.log(error.response)
    return error.response
  }

}

export default loginUser