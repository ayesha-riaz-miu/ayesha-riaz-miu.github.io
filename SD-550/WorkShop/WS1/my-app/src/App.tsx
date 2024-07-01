import React, { createContext, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Books from './components/Books';
import { create } from 'domain';
import { Book } from './types/books';
import Addbooks from './components/Addbooks';
import Author from './components/Author';
import { AuthorType } from './types/Author';

type ContextType={
  book:Book[]
  setbook:(updatebooks:Book[])=>void
  author:AuthorType[],
  setauthor:(newauthor:AuthorType[])=>void

}


export const context = createContext<ContextType>({
  book:[],
  setbook:()=>{},
  author:[],
  setauthor:()=>{}
})

function App() {
  const[book,setbook] = useState<Book[]>([])
  const [author,setauthor] = useState<AuthorType[]>([])
  
  return (
    
    <div style={{textAlign:'center'}}>
      <context.Provider value={{book,setbook,author,setauthor}}>
      <Books/>
      <Addbooks/>
      <Author/>
      </context.Provider>
     
    </div>
  );
}

export default App;
