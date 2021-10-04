import axios from "axios";
import keys from "../config/keys"
import config from "../config/config"

const body = {}

const loginUser = async (email, password) => {

  body.email = email
  body.password = password

  try {
    const response = await axios.post(keys.URLS.SERVER_URL + config.ENDPOINTS.LOGIN_USER, body)
    console.log(response)
    return response
  } catch (error) {
    console.log(error.response)
    return error.response
  }

}

export default loginUser