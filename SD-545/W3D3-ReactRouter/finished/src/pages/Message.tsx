import { title } from 'process'
import React, { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function Message() {
    const[message,setmessage] = useState([
        {id:1,name:'Ayesha',age:30},
        {id:2,name:'zarwa',age:8},
        {id:3,name:'dania',age:7},
    ])
  return (
    <div>
    <ul>
        {
            message.map(item=>(
                <li key={item.id}>
            <Link to={`detailsone?id=${item.id}&name=${item.name}&age=${item.age}}`}>{item.name}</Link>
                    
        </li>

            ))
        }
    </ul>
    <Outlet/>
   
</div>
  )
 
}
