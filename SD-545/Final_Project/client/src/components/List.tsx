import React, { useState } from 'react'
import Playlist from '../types/paylist';


 interface Music{
     id: string, 
     urlPath: string, 
     title: string, 
     releaseDate: string 
    }

type Props={
    music:Music[]
    searchQuery: string;
   your_playlist:(id:string)=>void
}

export default function List(props:Props) {
    const {music,searchQuery,your_playlist} = props;
    const [hovered, setHovered] = useState<string | null>(null);


    const handleMouseEnter = (itemId: string) => {
        setHovered(itemId);
    };

    const handleMouseLeave = () => {
        setHovered(null);
    };

    // const filteredMusic = searchQuery
    //                       ? music.filter(item => item.title.toLowerCase().includes(searchQuery.toLowerCase()))
    //                       : music;
  
    return (
        <div style={{textAlign:'center',marginLeft:'100px'}} >
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Index</th>
                        <th scope="col">Title</th>
                        <th scope="col">Released Date</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody className=" hover">
                    {
                        music.map((item,index) => (
                            <tr key={item.id} 
                            onMouseEnter={() => handleMouseEnter(item.id)}
                            onMouseLeave={handleMouseLeave}
                            >
                                <th scope="row">{index+1}  </th>
                                <td style={{ backgroundColor: hovered === item.id ? ' grey ': 'transparent' }}>{item.title}</td>
                                <td>{item.releaseDate}</td>
                                <td><button type="button" className="btn btn-info" onClick={()=>your_playlist(item.id)}>+</button></td>
                            </tr>

                        ))
                    }
                    



                </tbody>
            </table>

        </div>
    )
}
