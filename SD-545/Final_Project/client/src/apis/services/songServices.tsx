import Logintype from '../../types/login.types'
import Songs from "../../types/songs.types";
import Playlist1 from '../../types/addplaylist';
import http from '../axios'

 
const Log_in = (data: Logintype) => {
  
  return http.post("auth/login", data);
};
const Songs_DB = () => {
  // http.defaults.headers.common['Authorization'] = `Bearer ${sessionStorage.getItem('token')}`;
  return http.get("/music");
};
 
const postSongDB = (data: Songs) => {
  // http.defaults.headers.common['Authorization'] = `Bearer ${sessionStorage.getItem('token')}`;
  return http.post("/home", data);
};


const getPlaylist = () => {

  return http.get('/playlist');
}

const addPlaylist = (data: Playlist1) => {
  // http.defaults.headers.common['Authorization'] = `Bearer ${sessionStorage.getItem('token')}`;
  return http.post("/playlist/add", data);
};

const removePlaylist = (data: Playlist1) => {
  // http.defaults.headers.common['Authorization'] = `Bearer ${sessionStorage.getItem('token')}`;
  return http.post("/playlist/remove", data);
};

const getbyTitle=(findString:string)=>{
  return http.get(`/music?search=${findString}`)
}
  
 
export default {
  Log_in,
  Songs_DB,
  postSongDB,
 
  addPlaylist,
  removePlaylist,
  getPlaylist,
  getbyTitle
};