import React, { ChangeEvent, useRef, useState } from 'react'
import axios from 'axios'
import User from '../../types'
import userTypes from '../../types/user'



   const inputref = useRef<HTMLInputElement>(null)

type Props={
  setUser:(value:userTypes)=>void
}

export default function Search(props:Props) {
 
 const {setUser} = props


  const Search_data = async () => {
    setUser({ isFirst: false, isLoading: true, isError: false, user: [] });
    try {
        const response = await axios.get(`https://api.github.com/search/users?q=${inputref.current?.value}`);
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
        ref={inputref}
               />&nbsp;
        <button onClick={Search_data}>Search</button>
      </div>
    </section>
    </>
  )
}