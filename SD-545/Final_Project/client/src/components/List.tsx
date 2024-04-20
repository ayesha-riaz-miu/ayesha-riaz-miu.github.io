import React, { useState } from 'react'


 interface Music{
     id: string, 
     urlPath: string, 
     title: string, 
     releaseDate: string 
    }

type Props={
    music:Music[]
    searchQuery: string;
    handleAddToPlaylist:(id:string)=>void
}

export default function List(props:Props) {
    const {music,searchQuery,handleAddToPlaylist} = props;
    const [hoveredItemId, setHoveredItemId] = useState<string | null>(null);


    const handleMouseEnter = (itemId: string) => {
        setHoveredItemId(itemId);
    };

    const handleMouseLeave = () => {
        setHoveredItemId(null);
    };

    const filteredMusic = searchQuery
        ? music.filter(item => item.title.toLowerCase().includes(searchQuery.toLowerCase()))
        : music;
  
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
                        filteredMusic.map(item => (
                            <tr key={item.id} 
                            onMouseEnter={() => handleMouseEnter(item.id)}
                            onMouseLeave={handleMouseLeave}
                            style={{ backgroundColor: hoveredItemId === item.id ? 'blue ': 'transparent' }}>
                                <th scope="row">{item.id}</th>
                                <td>{item.title}</td>
                                <td>{item.releaseDate}</td>
                                <td><button type="button" className="btn btn-info" onClick={()=>handleAddToPlaylist(item.id)}>+</button></td>
                            </tr>

                        ))
                    }
                    



                </tbody>
            </table>

        </div>
    )
}
