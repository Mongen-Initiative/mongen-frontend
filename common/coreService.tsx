import axios from "axios";

export default axios.create({
  baseURL: `${process.env.mongenCore}`,
  headers: {
    "Content-type": "application/json"
  }
});
