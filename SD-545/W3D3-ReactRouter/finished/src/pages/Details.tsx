import React from 'react'
import { useParams } from 'react-router-dom'

export default function Details() {

    const {id,title,message} = useParams();


  return (
    <div>
        <p>id:{id}</p>
        <p>title:{title}</p>
        <p>message:{message}</p>
          
    </div>
  )
}
