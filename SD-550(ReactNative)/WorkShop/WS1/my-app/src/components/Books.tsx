import axios from 'axios'
import React, { ChangeEvent, useContext, useEffect, useState } from 'react'
import { context } from '../App'

export default function Books() {
  const { book, setbook, author, setauthor } = useContext(context)
  const [selectauthor,setselectauthor] = useState<string[]>([])

  const select_author = (e: ChangeEvent<HTMLInputElement>, authorId: string) => {
    if (e.target.checked) {
      setselectauthor([...selectauthor, authorId])
    } else {
      setselectauthor(selectauthor.filter(item => item !== authorId))
    }
  }
  
  const updateAuthor = async (bookId:string) => {
    const obj = { ...book.find(item => item.id === bookId), authors: selectauthor }
    const response = await axios.put(`http://localhost:3000/Book/${bookId}`, obj)
    if (response.status === 200) {
      alert('Successfully added author')
    } else {
      alert("Not added author")
    }
  }


  useEffect(() => {
    async function get_books() {
      const response = await axios.get('http://localhost:3000/Book')
      setbook(response.data)
    }
    get_books()
  }, [])
  return (
    <div>
      <h1>List of books</h1>
      {
        book.map(item1 => (
          <div>{item1.title}
            {
              author.map(item2 => (
                <div>
                  <input type='checkbox' checked={item1.authors.includes(item2.id)} onChange={(e) => select_author(e, item2.id)} />
                  <label htmlFor='item2.id'>{item2.id}</label>
                </div>


              )
              )
            }
            <button onClick={()=>updateAuthor(item1.id)}>add Author</button>
            <hr />
          </div>

        ))

      }

    </div>
  )
}
