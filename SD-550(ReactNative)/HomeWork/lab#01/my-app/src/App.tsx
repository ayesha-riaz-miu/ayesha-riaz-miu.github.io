import React, { ChangeEvent, useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import { Book } from './Types/Books';


// function App() {
//   const[books,setbooks] = useState<Book[]>([])
//   const[newbook,setnewbook] =  useState<Book>({ id:0, title: '',genre: '',isbn: '',format: '',summary:''})

//   useEffect(()=>{
//     async function get_books(){
//       const response = await axios.get('http://localhost:3000/Books')
//       setbooks(response.data)
//     }
//     get_books()

//   },[])
  
// const read_input=(e:ChangeEvent<HTMLInputElement>)=>{
//   const{name,value}= e.target
//   setnewbook({...newbook,[name]:value})
 
// }
// const add_book=async()=>{
  
//   setbooks([...books,newbook])
//   const response = await axios.post('http://localhost:3000/Books',newbook)
  
//   if(response.status==201){
//     alert('sucssesfully added')
//   }
//   else
//   alert('not added')
// }

//   return (
//     <>
//       <h1>List of Books</h1>
//     {
//       books.map(item=>(
//        <>
//        <ul>
//         <li>
//         <div>{item.title}</div>
//         </li>
//        </ul>
    
//        </>
       
//       ))
//     }
//     <div>
//     Book Title:<input name='title' onChange={read_input}></input>
//     <button onClick={add_book}>Add Book</button>
//     </div>
   
//     </>
//   );
// }

// export default App;


function App() {
  React.useEffect(() => {
    console.log('Component mounted');
    return () => {
      console.log('Component unmounted');
    };
  }, []);

  return (
    <div>
      <h1>App Component</h1>
    </div>
  );
}

function ParentComponent() {
  const [showApp, setShowApp] = useState(true);

  const toggleApp = () => {
    setShowApp((prevShowApp) => !prevShowApp);
  };

  return (
    <div>
      <button onClick={toggleApp}>
        {showApp ? 'Unmount App Component' : 'Mount App Component'}
      </button>
      {showApp && <App />}
    </div>
  );
}

export default ParentComponent;
