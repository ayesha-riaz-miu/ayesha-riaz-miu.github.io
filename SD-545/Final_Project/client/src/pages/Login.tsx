import { ChangeEvent, MouseEvent, useState } from 'react'
import logo from '../images/logo.jpg'
import { useNavigate } from 'react-router-dom';

import songServices from '../apis/services/songServices'


export default function Login() {
  const [username, setusername] = useState('')
  const [password, setpassword] = useState('')
  const [error, seterror] = useState('')

  const navigate = useNavigate();

  const login_user = (e: ChangeEvent<HTMLInputElement>) => {
    setusername(e.target.value)


  }
  const password_user = (e: ChangeEvent<HTMLInputElement>) => {
    setpassword(e.target.value)

  }


  const submit_button = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try {
      const response = await songServices.Log_in({ username, password });

      console.log(response.data.accessToken);
      console.log(response.status)

      if (response.status === 200) {
        const token = response.data.accessToken;
        const userId = response.data.id
        console.log(response.data)
        sessionStorage.setItem("token", token);
        sessionStorage.setItem('userId', userId)
        console.log(userId)
        navigate("/home");
      }
    } catch (e) {
      seterror("Incorrect username or password'! try Again");
    }

  }
  return (

    <div className="container" style={{ textAlign: 'center', marginTop: '100px' }}>
      <form>
        <img src={logo} alt='Maharishi Logo' style={{ width: '500px', marginLeft: '300px' }} />
        <h1 className="h3 mb-3 fw-normal" style={{ marginLeft: '300px' }}>Please sign in</h1>

        <div className="form-floating" style={{ width: '400px', marginLeft: '350px' }}>
          <input className="form-control " id="floatingInput" placeholder="name@example.com" value={username} onChange={login_user} />
          <label htmlFor="floatingInput">Email address</label>
        </div>
        <div className="form-floating" style={{ width: '400px', marginLeft: '350px' }}>
          <input type="password" className="form-control" id="floatingPassword" placeholder="Password" value={password} onChange={password_user} />
          <label htmlFor="floatingPassword">Password</label>
        </div>




        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px', marginLeft: '300px' }}>
          <button className="btn btn-primary w-20 py-2" type="submit" onClick={submit_button}>Sign in</button>

        </div>

      </form>
      <div>

      </div>
      <h6 style={{ color: 'red', marginLeft: '300px' }}>{error}</h6>

    </div>
  )
}


