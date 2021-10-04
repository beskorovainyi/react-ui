import axios from "axios";
import keys from "../config/keys";
import config from "../config/config"

const body = {}

const registrationUser = async (name, email, password) => {

  body.name = name
  body.email = email
  body.password = password

  try {
    const response = await axios.post(keys.URLS.SERVER_URL + config.ENDPOINTS.REGISTRATION_USER, body)
    console.log(response)
    return response
  } catch (error) {
    console.log(error.response)
    return error.response
  }

}

export default registrationUser