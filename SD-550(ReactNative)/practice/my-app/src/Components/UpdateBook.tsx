import React, { ChangeEvent, useContext, useState } from 'react'
import BookType from '../types/BookType';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { context } from '../App';
import axios from 'axios';

export default function UpdateBook() {
    const {id}  = useParams()
  const navigate = useNavigate()
    
    const [newbook, setnewbook] = useState<BookType>({id:'',title:'',genre:'',isbn:'',format:'' });
    const {books,setbooks} = useContext(context)

    const get_input=(e:ChangeEvent<HTMLInputElement>)=>{
        const{name,value}  = e.target;
        setnewbook({...newbook,[name]:value})
    }
    const update_book=async()=>{
        setbooks([...books,newbook])
        try{
            const response = await axios.put(`http://localhost:3000/Books/${newbook.id}`,newbook)
           
            if(response.status==200){
                alert("Succesfully update")
            }
            else{
                alert('not added')
            }
            navigate('/book')


        }
        catch(error){

        }
    }
  return (
    <div>
        <h1>Update Book</h1>
        <input placeholder='Id' onChange={get_input} name='id'/><br/>
        <input placeholder='Title'  onChange={get_input} name='title'/><br/>
        <input placeholder='Genre'  onChange={get_input} name='genre'/><br/>
        <input placeholder='Isbn'  onChange={get_input} name='isbn'/><br/>
        <input placeholder='Format'  onChange={get_input} name='format'/><br/><br/>
        <button onClick={update_book}>Update</button>
    </div>
  )
}
