/* eslint-disable react/no-unescaped-entities */
import contrasena from '../components/assets/contrasena.svg'
import loginUser  from '../components/assets/login.svg'
import google  from '../components/assets/google.png'
import user  from '../components/assets/usuario.svg'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import { useState } from 'react';



const LoginSignIn = () => {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handdleLogin = (e) => {
    e.preventDefault();
    console.log({username: username, password: password})
  }

  return (
    <div className='d-flex justify-content-center align-items-center vh-100'>
      <div className='bg-white p-5' style={{ borderRadius: '20px', boxShadow: '4px 6px 12px 0px rgba(173,173,173,0.51)' }}>
        <div className='d-flex justify-content-center'>
          <img className='text-secondary' src={loginUser} alt="Login-Icon" style={{ width: '9rem', marginTop: '-35px', marginBottom: '-15px' }} />
        </div>
        <div className='text-center text-secondary fs-3 fw-bold ' style={{ marginBottom: '8px' }}>Login</div>

          {/* Primer input */}
        <InputGroup className="mb-1">
          <InputGroup.Text id="basic-addon1" style={{ background: '#FA7436' }}><img className='text-white' src={user} alt="Email" style={{ height: '1.6rem'}}/></InputGroup.Text>
          <Form.Control
            placeholder="Username"
            aria-label="Username"
            aria-describedby="basic-addon1"
            onChange={(e)=>{setUsername(e.target.value)}}
          />
        </InputGroup>

          {/* Segundo input */}
        <InputGroup className="mb-2">
          <InputGroup.Text id="basic-addon1" style={{ background: '#FA7436' }}><img className='text-white' src={contrasena} alt="Email" style={{ height: '1.6rem'}}/></InputGroup.Text>
          <Form.Control
            placeholder="Password"
            type="password"
            aria-describedby="basic-addon1"
            onChange={(e)=>{setPassword(e.target.value)}}
          />
        </InputGroup>


        
        {/* Olvide mi contraseña */}
        <div className='d-flex justify-content-center mt-2'>
          <div>
            <a href="#" className='text-decoration-none fw-bold fst-italic' style={{ color: '#FA7436', fontSize: '0.9rem'}}>Forgot your password?</a>
          </div>
        </div>
        
        {/* Botón de inicio de sesión */}
        <Button className='text-white w-100 mt-3 fw-bold shadow-sm py-2' onClick={handdleLogin} style={{ background: '#FA7436', border: 'none' }}>Login</Button>
        
        <div className='d-flex gap-1 justify-content-center mt-1'>
          <div><p>Don't have an account?</p></div>
          <Link style={{ textDecoration: 'none', color: '#FA7436' }} to='/register'>Sign up</Link>
        </div>

        <div className='p-3'>
          <div className='border-bottom text-center' style={{ height: '0.8rem' }}>
            <span className='bg-white px-3'>Or</span>
          </div>
        </div>


        {/* Botón Google */}
        <div className="d-gap gap-2 justify-content-center border mt-2 shadow-sm text-center p-1" >
          <img src={google} alt="google" style={{ height: '1.4rem', margin: '2px' }} />
          <Button className='fw-bold text-secondary' variant="white" size="lg">Continue with Google</Button>
        </div>
      </div>
    </div>
  )
}

export default LoginSignIn;
