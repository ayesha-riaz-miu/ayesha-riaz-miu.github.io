import React, { ChangeEvent, useEffect, useState,MouseEvent } from 'react'
import List from '../components/List'
import Songs from '../types/songs.types';
import songServices from '../apis/services/songServices';
import { useNavigate } from 'react-router-dom';
import 'react-h5-audio-player/lib/styles.css';
import Playlist from '../types/paylist';
import Header from '../components/Footer';
import Footer from '../components/Footer';




export default function Home() {
  const [music, setmusic] = useState<Songs[]>([])
  const [searchQuery, setSearchQuery] = useState('');
  const [playlist, setPlaylist] = useState<Playlist[]>([]);
  const [currentSong, setCurrentSong] = useState<Songs | null>(null);
  const [hovered, setHovered] = useState<string | null>(null);
  const [source,setSource]= useState<string>('')
  
  const navigate = useNavigate();

const userid= sessionStorage.getItem('userId')


  useEffect(() => {

    const addMusic = async () => {
      try {
        const response = await songServices.Songs_DB();
        const data =  response.data;
        setmusic(data);
        // console.log("songs",music)
      } catch (e) {
        console.error(e);
      }
    };
    addMusic();
    
    

  }, []);

  useEffect(() => {
    const fetchPlaylistData = async () => {
      try {
        const response = await songServices.getPlaylist();
        const data = response.data;
        const filteredPlaylist = data.filter(
          (playlist: Playlist) => playlist.userId === userid
        );
      
        setPlaylist(filteredPlaylist);
        // console.log("playlist is here",playlist)
      } catch (error) {
        console.error("Error fetching playlist:", error);
      }
    };
  
    fetchPlaylistData();
 
  }, []);


  const handleSearch = async (e: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
 
    const response = await songServices.getbyTitle(e.target.value);
    const data = response.data;
    console.log("data=", data);
   setmusic(data)
  };

  const handleAdd = async(id: string) => {
const songId= id
    const response = await songServices.addPlaylist({songId})
    const data:Playlist[]= await response.data
    setPlaylist(data)
    console.log("llll",playlist)
   
    
  };


  const RemoveFromPlaylist = async (id: string) => {
   try{
    const songId=id
    const response= await songServices.removePlaylist({songId})
    const data=response.data
    const deletedPlaylist= data.filter((item:Playlist)=>item.songId!==id)
    setPlaylist(deletedPlaylist)
   }catch(e){
    console.log('error')
   }
  };
  const Play_song = (e:MouseEvent<HTMLButtonElement>) => {
    const value=e.currentTarget.value
    setSource(value)
    console.log(source)
  }


  const log_out = () => {
    navigate('/login')

  }
  const handleMouseEnter = (itemId: string) => {
    setHovered(itemId);
};

const handleMouseLeave = () => {
    setHovered(null);
};
  
  const musicPlaying= playlist.find((song)=>song.urlPath===source)
  return (

    <div >
       {/* Search bar */}
      <div className="px-3 py-2 border-bottom mb-3 " style={{ marginLeft: '220px', width: '500px', marginTop: '10px' }}>
        <div className="container d-flex flex-wrap justify-content-center" >

          <form className="col-24 col-lg-auto mb-2 mb-lg-0 me-lg-auto" role="search">
            <input type="search" className="form-control" placeholder="Search..." aria-label="Search" style={{ marginTop: '50px', width: '600px', marginRight: '20px' }}
              value={searchQuery} onChange={handleSearch} />
          </form>


              {/* Logout button */}
          <div className="text-end">
            <button type="button" className="btn btn-light text-dark ml-2 " style={{ marginLeft: '700px', marginTop: '-60px' }} onClick={log_out} >Logout</button>
          </div>

        </div>
      </div>
    
      <div>


        <h4 style={{ marginLeft: '130px' }}> Songs You May Intrested</h4>
        <List music={music}  your_playlist={handleAdd} />


        <h4 style={{ marginLeft: '100px' }}> Your Playlist ({playlist.length} {playlist.length === 1 ? 'Song' : 'Songs'})</h4>
        {playlist.length === 0 ? (
          <p style={{ marginLeft: '100px' }}>Your playlist is empty.</p>
          ) : (
            
            
         
        <table className="table" style={{ marginLeft: '100px' }}>
          <thead>
            <tr>
              <th scope="col">Index</th>
              <th scope="col">Title</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {playlist.map((singlePlay, index) => {
              
              return (
                <tr key={singlePlay.id}
                onMouseEnter={() => handleMouseEnter(singlePlay.id)}
                            onMouseLeave={handleMouseLeave}>
                  
                  <th style={{ backgroundColor: hovered === singlePlay.id ? ' grey ': 'transparent' }} scope="row">{index + 1}</th>
                  <td style={{ backgroundColor: hovered === singlePlay.id ? ' grey ': 'transparent' }}>{singlePlay.title}</td>
                  <td>
                    <button type="button" className="btn btn-success" value={singlePlay.urlPath} onClick={Play_song}>Play</button>

                    <button type="button" className="btn btn-danger" onClick={() => RemoveFromPlaylist(singlePlay.songId)}>Delete</button>
                  </td>
                </tr>
              );
            })}



          </tbody>
        </table>
          )}
      </div>

      <br/>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginLeft: '70px' }}>
        <span style={{ fontWeight: 'bold' }}>{musicPlaying?.title}</span>
      </div>
      <br/>

      
     
      <Footer source={source}/>


    </div>
  )
}
