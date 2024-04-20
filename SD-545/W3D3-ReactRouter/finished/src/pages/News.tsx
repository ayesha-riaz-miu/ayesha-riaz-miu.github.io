import { title } from 'process'
import React, { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function News() {
    const [news,setnews]=useState([
        {id:1,title:"Good News",message:'i am avalible'},
        {id:2,title:"bad News",message:'i am  notavalible'},
        {id:3,title:"Good News",message:'i am  also avalible'}
    ])
    
  return (
    <div>
    <ul>
        {
            news.map(item=>(
                <li>
            <Link to={`details/${item.id}/${item.title}/${item.message}`}>{item.title}</Link>
        </li>
            ))
        }
    </ul>
    <Outlet/>
</div>
  )
}
