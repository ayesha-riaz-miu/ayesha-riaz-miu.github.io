import { ChangeEvent, MouseEvent, useState } from 'react'
import logo from '../images/logo.jpg'
import { NavLink, Navigate, Outlet, useNavigate } from 'react-router-dom';
import Home from './Home';

type Users={
  id:string,
  playType:string,
  username:string,
  email:string,
  password:string


}


export default function Login() {
  const[login,setlogin] = useState('')
  const[password,setpassword] = useState('')
  const [loginError, setLoginError] = useState('');
  const [users,setusers] =useState<Users[]>([
    { id: '1', playType: 'ORDER', username: 'pop', email: 'pop@mail.com', password: '123' },
    { id: '2', playType: 'ORDER', username: 'rock', email: 'rock@mail.com', password: '123' },
    { id: '3', playType: 'ORDER', username: 'hiphop', email: 'hiphop@mail.com', password: '123' },
    { id: '4', playType: 'ORDER', username: 'mix', email: 'mix@mail.com', password: '123' }
])
const navigate = useNavigate();

  const login_user=(e:ChangeEvent<HTMLInputElement>)=>{
    setlogin(e.currentTarget.value)

  }
  const password_user=(e:ChangeEvent<HTMLInputElement>)=>{
    setpassword(e.currentTarget.value)

  }
  
  const submit_button = (e:MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const user = users.find(user => user.username === login && user.password === password);

    if (user) {
        console.log('Login successful');

        navigate('/home');
       
    } else {
        setLoginError('Incorrect username or password');
    }
   
    
  }
    return (

    <div className="container" style={{ textAlign: 'center', marginTop: '100px' }}>
    <form>
      <img src={logo} alt='Maharishi Logo' style={{ width: '500px' ,marginLeft:'300px'}} />
      <h1 className="h3 mb-3 fw-normal" style={{ marginLeft:'300px'}}>Please sign in</h1>

      <div className="form-floating" style={{ width: '400px', marginLeft: '350px' }}>
        <input className="form-control " id="floatingInput" placeholder="name@example.com"  value={login} onChange={login_user}/>
        <label htmlFor="floatingInput">Email address</label>
      </div>
      <div className="form-floating" style={{ width: '400px', marginLeft: '350px' }}>
        <input type="password" className="form-control" id="floatingPassword" placeholder="Password"  value={password} onChange={password_user}/>
        <label htmlFor="floatingPassword">Password</label>
      </div>

      


      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' ,marginLeft:'300px'}}>
        <button className="btn btn-primary w-20 py-2" type="submit" onClick={submit_button}>Sign in</button>
       
      </div>
            
    </form>
    <div>
        
      </div>
   <h6 style={{color:'red' ,marginLeft:'300px'}}>{loginError}</h6> 
  </div>
  )
}


