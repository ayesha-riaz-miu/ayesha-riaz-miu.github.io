import React, { ChangeEvent, useEffect, useState } from 'react'
import logo from '../images/logo.jpg'
import List from '../components/List'


export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [music, setmusic] = useState([
    { id: '1', urlPath: 'music/mocking_bird.mp3', title: 'Mocking Bird', releaseDate: '1989-1-2' },
    { id: '2', urlPath: 'music/smooth_criminal.mp3', title: 'Smooth Criminal', releaseDate: '1999-12-12' },
    { id: '3', urlPath: 'music/last_ride_with_me.mp3', title: 'Last Ride', releaseDate: '1989-11-3' },
    { id: '4', urlPath: 'music/comfortably_numb.mp3', title: 'Comfortably Numb', releaseDate: '2000-3-2' },
    { id: '5', urlPath: 'music/gagnum_style.mp3', title: 'Gangnum Style', releaseDate: '2000-4-2' },
    { id: '6', urlPath: 'music/in_the_end.mp3', title: 'In the End', releaseDate: '2000-5-2' },
    { id: '7', urlPath: 'music/bad_romance.mp3', title: 'Lady Gaga Bad Romance', releaseDate: '2001-6-2' },
    { id: '8', urlPath: 'music/single_lady.mp3', title: 'Single Lady', releaseDate: '2002-7-2' },
    { id: '9', urlPath: 'music/last_resort.mp3', title: 'Last Resort', releaseDate: '2004-7-2' },
    { id: '10', urlPath: 'music/mission_impossible.mp3', title: 'Mission Impossible', releaseDate: '2022-9-2' }


  ])
  const [playlist, setPlaylist] = useState<string[]>([]);



  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {

    setSearchQuery(e.currentTarget.value)
    const filteredMusic = searchQuery

  }
  const handleAddToPlaylist = (id: string) => {
    setPlaylist(prev => [...prev, id]);
  };
  const handleRemoveFromPlaylist = (id: string) => {
    setPlaylist(item => {
        const newPlaylist = item.filter(songId => songId !== id);
        localStorage.setItem('playlist', JSON.stringify(newPlaylist));
        return newPlaylist;
    });
};
  

  return (

    <div >
      <div className="px-3 py-2 border-bottom mb-3 " >
        <div className="container d-flex flex-wrap justify-content-center">

          <form className="col-24 col-lg-auto mb-2 mb-lg-0 me-lg-auto" role="search">
            <input type="search" className="form-control" placeholder="Search..." aria-label="Search" style={{ marginLeft: '170px', width: '500px', marginTop: '50px' }}
              value={searchQuery} onChange={handleSearchChange} />
          </form>

          <div className="text-end">
            <button type="button" className="btn btn-light text-dark ml-2 " style={{ marginTop: '50px' }}>Logout</button>
          </div>

        </div>
      </div>
      <div>
        <h4 style={{ marginLeft: '100px' }}> Songs You May Intrested</h4>
        <List music={music} searchQuery={searchQuery} handleAddToPlaylist={handleAddToPlaylist} />




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
