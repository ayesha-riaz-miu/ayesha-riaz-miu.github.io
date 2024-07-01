import React from 'react'
import { Link } from 'react-router-dom'

export default function () {
  return (
    <div style={{display:'flex',flexDirection:'column'}}>
        <Link to="/book">List Of Books</Link>
        <Link to="/author">List Of Authors</Link>
    </div>
  )
}
