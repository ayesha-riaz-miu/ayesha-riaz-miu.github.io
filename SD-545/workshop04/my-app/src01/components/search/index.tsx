import React, { ChangeEvent, useState } from 'react'
import axios from 'axios'
import User from '../../types'
import userTypes from '../../types/user'

type Props={
  setUser:(value:userTypes)=>void
}

export default function Search(props:Props) {
  const [input,setinput] = useState('')
 const {setUser} = props

  const pick_input=(e:ChangeEvent<HTMLInputElement>)=>{
    setinput(e.currentTarget.value)
  }

  const Search_data = async () => {
    setUser({ isFirst: false, isLoading: true, isError: false, user: [] });
    try {
        const response = await axios.get(`https://api.github.com/search/users?q=${input}`);
        if (response.status === 200) {
            setUser({ isFirst: false, isLoading: false, isError: false, user: response.data.items });
        } else {
            setUser({ isFirst: false, isLoading: true, isError: true, user: [] });
        }
    } catch (e) {
        setUser({ isFirst: false, isLoading: true, isError: true, user: [] });
    }

}

  return (
    <>
    <section className="jumbotron">
      <h3 className="jumbotron-heading">Search Github Users</h3>
      <div>
        <input type="text" placeholder="enter the name you search"
        value={input} onChange={pick_input}
               />&nbsp;
        <button onClick={Search_data}>Search</button>
      </div>
    </section>
    </>
  )
}