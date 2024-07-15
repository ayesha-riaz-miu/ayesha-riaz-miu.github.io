import { ChangeEvent, MouseEvent, useState } from "react";

type Person={
    username:string,
    password:string,
   
}


function App() {
    //const[username,setusername]=useState('')

    const[person,setperson] = useState<Person>({username:'',password:''})



//  const handle_input=(e:ChangeEvent<HTMLInputElement>)=>{
//     //setuser(e.currentTarget.value)
//     setperson({...person, username:e.target.value})
  
//  }
//  const handle_password=(e:ChangeEvent<HTMLInputElement>)=>{
//     //setuser(e.currentTarget.value)
//     setperson({...person,password:e.target.value})
  
//  }
const handle_person=(e:ChangeEvent<HTMLInputElement>)=>{

    setperson({...person,[e.target.name]:e.target.value})

}

const loginbutton=(e:MouseEvent<HTMLButtonElement>)=>{
    e.preventDefault();
    if(person.username == 'ayesha' && person.password == '123'){
      console.log('succesfully login')
    }
    else{
      console.log('failed')
    }


}
  return (
    <form>
      UserName:<input name="username" value={person.username} onChange={handle_person}></input>
      Password:<input name="password" type="password" value={person.password} onChange={handle_person}></input>
      <button onClick={loginbutton}>login</button>
     
      
    </form>

  )


}


export default App;
