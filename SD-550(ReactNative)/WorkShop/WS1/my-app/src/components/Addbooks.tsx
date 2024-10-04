import React, { ChangeEvent, useContext, useState } from 'react'
import { Book } from '../types/books'
import { context } from '../App'
import axios from 'axios'

export default function Addbooks() {
  const{book,setbook} = useContext(context)
  const[newbook,setnewbook] = useState<Book>({
    id: "",
    title: "",
    genre: "",
    isbn: "",
    summary: "",
   format: "paper",
    authors: []

  })
  const set_newbook=(e:ChangeEvent<HTMLInputElement>)=>{
    const {name,value} = e.target;
    setnewbook({...newbook,[name]:value})
  }
  const submit_book=async()=>{
    setbook([...book,newbook])
    const response = await axios.post('http://localhost:3000/Book',newbook)
    if(response.status==201){
      alert('succesfully added')
    }
    else{
      alert('not added')
    }

  }
  return (
    <div>
      <input placeholder='Id' name='id' onChange={set_newbook}></input>
      <input placeholder='Title' name='title' onChange={set_newbook}></input>
      <input placeholder='Isbn' name='isbn' onChange={set_newbook}></input>
      <input placeholder='Summary' name='summary' onChange={set_newbook}></input>
      <button onClick={submit_book}>Submit</button>
    </div>
  )
}
