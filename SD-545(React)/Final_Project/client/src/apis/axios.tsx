import axios from "axios";
 
const token = sessionStorage.getItem("token");

const instance = axios.create({
  baseURL: "http://localhost:3000/api",
  headers: {
    "Content-Type": "application/json",
     Authorization: `Bearer ${token}`,
  },
});

 export default instance;