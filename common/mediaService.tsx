import axios from "axios";

export default axios.create({
  baseURL: `${process.env.mongenMedia}`,
  headers: {
    "Content-type": "application/json"
  }
});
