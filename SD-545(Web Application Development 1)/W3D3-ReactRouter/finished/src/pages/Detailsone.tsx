import React from 'react'
import { useParams, useSearchParams } from 'react-router-dom'

export default function Detailsone() {
  const [search,setsearch] = useSearchParams()
  return (
    
    <div>
        <p>id:{search.get('id')}</p>
        <p>name:{search.get('name')}</p>
        <p>age:{search.get('age')}</p>
    </div>
  )
}
