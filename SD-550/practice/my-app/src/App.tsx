import { createContext, useState } from "react"
import Book from "./types/BookType"
import { Router, RouterProvider, createBrowserRouter, useRoutes } from "react-router-dom"
import BookList from "./Components/BookList"
import BookType from "./types/BookType"

import { AuthorType } from "./types/AuthorTupes"
import Home from "./Components/Home"
import AddBook from "./Components/AddBook"
import UpdateBook from "./Components/UpdateBook"
import AuthorList from "./Components/AuthorList"


type ContextType={
  books:BookType[]
  setbooks:(newvalue:Book[])=>void
  authors:AuthorType[],
  setauthors:(newauthor:AuthorType[])=>void
}

export const context = createContext<ContextType>({
  books:[],
  setbooks:()=>{},
  authors:[],
  setauthors:()=>{}
})
const router = createBrowserRouter([
  {
      path:'/',
      element:<Home/>

  },
  {
      path:'/book',
      element:<BookList/>

  },
  {
      path:'/addbook',
      element:<AddBook/>
  },
  {
      path:'/updatebook/:id',
      element:<UpdateBook/>
  },
  {
      path:'/author',
      element:<AuthorList/>
  }
])


export default function App() {

  // const element = useRoutes(routes)

  const[books,setbooks] = useState<BookType[]>([])
  const[authors,setauthors] = useState<AuthorType[]>([])

  return(
    <div style={{marginLeft:'500px'}}>
      <context.Provider value={{books,setbooks,authors,setauthors}}>
        <RouterProvider router={router}/>
        
         {/* {element} */}
      </context.Provider>

    

    </div>
  )
}