import React, { ChangeEvent, useContext, useState } from 'react'
import { AuthorType } from '../types/Author'
import axios from 'axios'
import { context } from '../App'

export default function AddAuthor() {
   const{author,setauthor} = useContext(context)
    const[newauthor,setnewauthor] = useState<AuthorType>({id: "",firstname: "",lastname: "", phone: "",email: "",address: ""})

    const set_newauthor=(e:ChangeEvent<HTMLInputElement>)=>{
        const{name,value} = e.target
        setnewauthor({...newauthor,[name]:value})
    }
    const add_newauthor=async()=>{
        setauthor([...author,newauthor])
        const response = await axios.post('http://localhost:3000/Author',newauthor)
        if(response.status===201){
            alert('Succesfully added')
        }
        else{
            alert('Not Added')
        }
    }
  return (
    <div>
      <input placeholder='Id' name='id' onChange={set_newauthor}></input>
      <input placeholder='FirstName' name='firstname' onChange={set_newauthor}></input>
      <input placeholder='LastName' name='lastname' onChange={set_newauthor}></input>
      <input placeholder='Email' name='email' onChange={set_newauthor}></input>
      <input placeholder='Adress' name='adress' onChange={set_newauthor}></input>
      <button onClick={add_newauthor}>Submit</button>

    </div>
  )
}
