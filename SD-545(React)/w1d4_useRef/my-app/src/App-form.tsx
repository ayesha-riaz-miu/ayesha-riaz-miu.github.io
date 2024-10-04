import { ChangeEvent, MouseEvent, useState } from "react";




function App() {

  let [username, setuser] = useState('')
  let [password, setpassword] = useState('')

  const handle_input = (e: ChangeEvent<HTMLInputElement>) => {

    setuser(e.currentTarget.value)
  }

    const handle_password = (e: ChangeEvent<HTMLInputElement>) => {

      setpassword(e.currentTarget.value)

    }
    const loginbutton=(e:MouseEvent<HTMLButtonElement>)=>{
      e.preventDefault();
      if(username == 'ayesha' && password == '123'){
        console.log('succesfully login')
      }
      else{
        console.log('failed')
      }

    }

  return (
    <form>
      UserName:<input value={username} onChange={handle_input}></input>
      Password:<input type="password" value={password} onChange={handle_password}></input>
      <button onClick={loginbutton}>login</button>
    </form>

  )


}

export default App;
