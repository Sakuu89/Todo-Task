import axios from "axios";

const api = axios.create({
  // baseURL: "http://localhost:4000/api/"
  baseURL: "https://todo-task-uikj.onrender.com/api"
});
export default api; 
