import React, { ChangeEvent, useContext, useState } from 'react'
import BookType from '../types/BookType'
import axios from 'axios';
import { context } from '../App';
import { useLocation, useNavigate } from 'react-router-dom';

export default function AddBook() {
    const navigate = useNavigate()
    const location = useLocation()
    const[newbook,setnewbook] = useState<BookType>(location.state)
    const{books,setbooks}  = useContext(context)

    const get_input=(e:ChangeEvent<HTMLInputElement>)=>{
        const{name,value}  = e.target;
        setnewbook({...newbook,[name]:value})
    }
   const submit_data=async()=>{
     
    setbooks([...books,newbook])
       
    const response = await axios.post('http://localhost:3000/Books',newbook)
  

    if(response.status==201){
        
        alert('Succesfully added')
        navigate('/book')
    }
    else {
        alert('not added')
    }


   }
   
  return (
    <div>
        <h1>Add new Book</h1>
        <input placeholder='Id'  onChange={get_input} name='id'/><br/>
        <input placeholder='Title'    onChange={get_input} name='title'/><br/>
        <input placeholder='Genre'   onChange={get_input} name='genre'/><br/>
        <input placeholder='Isbn'    onChange={get_input} name='isbn'/><br/>
        <input placeholder='Format'   onChange={get_input} name='format'/><br/><br/>
        <button  onClick={submit_data}>Submit</button>
    </div>
  )
}
