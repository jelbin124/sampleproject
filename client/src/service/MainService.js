import axios from "axios";

class MainService {
  getUsers() {
    return axios.get("/customer_dops/userdata");
  }
}

export default new MainService();