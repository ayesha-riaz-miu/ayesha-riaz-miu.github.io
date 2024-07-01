import axios from 'axios'
import React, { createContext, useContext, useEffect, useState } from 'react'
import { AuthorType } from '../types/Author'
import AddAuthor from './AddAuthor'
import { context } from '../App'




export default function Author() {
    const {author,setauthor} = useContext(context)
    useEffect(()=>{
       async function get_author(){
            const response = await axios.get('http://localhost:3000/Author')
            setauthor(response.data)

        }
        get_author()
    },[])
  return (
    <div>
        <h1>List of Authors</h1>
        {
            author.map(item=>(
                <div>{item.id}</div>
            ))
        }
     
            <AddAuthor/>

        

       

    </div>
  )
}
