import React, { ChangeEvent, useEffect, useState } from 'react'
import logo from '../images/logo.jpg'
import List from '../components/List'
import Songs from '../types/songs.types';
import songServices from '../apis/services/songServices';
import { useNavigate } from 'react-router-dom';




export default function Home() {
  const [music, setmusic] = useState<Songs[]>([])
  const [searchQuery, setSearchQuery] = useState('');
  const [playlist, setPlaylist] = useState<string[]>([]);
  const navigate = useNavigate();




  useEffect(() => {

    const addMusic = async () => {
      try {
        const response = await songServices.Songs_DB();
        const data = await response.data;
        setmusic(data);
      } catch (e) {
        console.error(e);
      }
    };
    addMusic();
  }, []);


  useEffect(() => {
    const storedPlaylist = localStorage.getItem('playlist');
    if (storedPlaylist) {
        setPlaylist(JSON.parse(storedPlaylist));
    }
}, []);


  const search_song = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.currentTarget.value)
 
  }

  
  const your_playlist = (id: string) => {
    if (!playlist.includes(id)) {
      setPlaylist(prev => [...prev, id]);
      localStorage.setItem('playlist', JSON.stringify([...playlist, id]));
  }
  };


  const handleRemoveFromPlaylist = (id: string) => {
    setPlaylist(item => {
        const newPlaylist = item.filter(songId => songId !== id);
        localStorage.setItem('playlist', JSON.stringify(newPlaylist));
        return newPlaylist;
    });
};

const log_out=()=>{
  navigate('/login')
  
  
}
  

  return (

    <div >
      <div className="px-3 py-2 border-bottom mb-3 " style={{ marginLeft: '220px', width: '500px', marginTop: '10px' }}>
        <div className="container d-flex flex-wrap justify-content-center" >

          <form className="col-24 col-lg-auto mb-2 mb-lg-0 me-lg-auto" role="search">
            <input type="search" className="form-control" placeholder="Search..." aria-label="Search" style={{marginTop:'50px', width:'400px'}}
              value={searchQuery} onChange={ search_song} />
          </form>

          <div className="text-end">
            <button type="button" className="btn btn-light text-dark ml-2 "style={{marginLeft:'500px', marginTop:'-60px'}} onClick={log_out} >Logout</button>
          </div>

        </div>
      </div>
      <div>

        <h4 style={{ marginLeft: '150px' }}> Songs You May Intrested</h4>
        <List music={music} searchQuery={searchQuery} your_playlist={your_playlist} />







        <h4 style={{ marginLeft: '100px' }}> Your Playlist </h4>
       
        <table className="table" style={{marginLeft:'100px'}}>
          <thead>
            <tr>
              <th scope="col">Index</th>
              <th scope="col">Title</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {playlist.map((id, index) => {
              const selectedSong = music.find(song => song.id === id);
              return (
                <tr key={id}>
                  <th scope="row">{index + 1}</th>
                  <td>{selectedSong?.title}</td>
                  <td>
                  <button type="button" className="btn btn-success">Play</button>
                   
                <button type="button" className="btn btn-danger" onClick={() => handleRemoveFromPlaylist(id)}>Delete</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>





      </div>

    </div>
  )
}
