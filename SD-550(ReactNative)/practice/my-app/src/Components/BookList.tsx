import { ChangeEvent, useContext, useEffect, useState } from "react"
import { context } from "../App"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import BookType from "../types/BookType"
import { AuthorType } from "../types/AuthorTupes"

export default function BookList() {
    const navigate = useNavigate()
    const { books, setbooks, authors, setauthors } = useContext(context)
    const [search, setsearch] = useState("")
    const [selectedauthors,setselectedauthors] = useState<AuthorType[]>([])
    console.log(authors)

    useEffect(() => {
        const get_books = async () => {
            const response = await axios.get('http://localhost:3000/Books')
            setbooks(response.data)

        }
        get_books()

    }, [])

    const chnage_componenet = () => {
        navigate('/addbook')
    }
    const delete_book = async (id: string | number) => {
        const delete_book = books.filter(item => item.id != id)
        setbooks(delete_book)

        try {
            const response = await axios.delete(`http://localhost:3000/Books/${id}`)
            if (response.status == 200) {
                window.confirm('Are you Sure!!!')

            }

        }
        catch (error) {

        }
    }
    const go_updatebook = (data: BookType, id: string | number) => {
        navigate(`/updatebook/${id}`, { state: data })


    }
    const set_search = (e: ChangeEvent<HTMLInputElement>) => {
        setsearch(e.currentTarget.value)

    }
    const search_book = () => {
        const data = books.filter(item => item.title.toLowerCase().startsWith(search.trim().toLocaleLowerCase()))
        setbooks(data)
        console.log(data)

    }
    const select_authors=(e:ChangeEvent<HTMLInputElement>)=>{
        
       

    }

    return (
        <div >
            <div>
                <input onChange={set_search} />
                <button onClick={search_book}>Search</button>
            </div>

            <h1>List Of Books</h1>
            {
                books.map((item1: BookType) => (
                    <div key={item1.id}>{item1.title}
                        <div>

                        </div>
                        {
                            authors.map(item2 => (
                                <div>
                                    <input type="checkbox"   checked={item1.authors?.includes(item2.id)}/>
                                    <label htmlFor="item.id">{item2.firstname}</label>
                                   

                                </div>

                            ))
                        }


                        <br />
                        <br />
                        <br />
                        <div>
                            <button onClick={() => delete_book(item1.id)}>Delete Book</button>
                            <button onClick={() => go_updatebook(item1, item1.id)}>Update Book</button>
                        </div>

                        <hr />



                    </div>


                ))


            }

            <br />
            <button onClick={chnage_componenet}>Add new Book</button>


        </div>
    )

}

