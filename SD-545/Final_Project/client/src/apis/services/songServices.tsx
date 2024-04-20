import Logintype from '../../types/login.types'
import Songs from "../../types/songs.types";
import http from '../axios'

 
const Log_in = (data: Logintype) => {
  return http.post("auth/login", data);
};
const Songs_DB = () => {
  return http.get("/music");
};
 
const postSongDB = (data: Songs) => {
  return http.post("/home", data);
};
 
export default {
  Log_in,
  Songs_DB,
  postSongDB
};