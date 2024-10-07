import React, { useContext, useEffect } from 'react'
import { context } from '../App'
import axios from 'axios'

export default function AuthorList() {
  const {authors,setauthors} = useContext(context)

  useEffect(()=>{
   async function get_author(){
      const response = await axios('http://localhost:3000/Author')
      
      setauthors(response.data)


    }
    get_author()
    
  },[])
  
 
  return (
    <div>
      <h1>List Of Authors</h1>
      {
        authors.map(item=>(
          <div key={item.id}>{item.firstname}</div>
        ))
      }

    </div>
  )
}
