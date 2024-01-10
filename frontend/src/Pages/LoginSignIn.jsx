/* eslint-disable react/no-unescaped-entities */
import contrasena from '../components/assets/contrasena.svg'
import loginUser  from '../components/assets/login.svg'
import google  from '../components/assets/google.png'
import user  from '../components/assets/usuario.svg'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { Link } from 'react-router-dom'




const LoginSignIn = () => {
  return (
    <div className='d-flex justify-content-center align-items-center vh-100'>
      <div className='bg-white p-5' style={{ borderRadius: '20px', boxShadow: '4px 6px 12px 0px rgba(173,173,173,0.51)' }}>
        <div className='d-flex justify-content-center'>
          <img className='text-secondary' src={loginUser} alt="Login-Icon" style={{ width: '9rem' }} />
        </div>
        <div className='text-center text-secondary fs-3 fw-bold ' style={{ width: '25rem' }}>Login</div>

          {/* Primer input */}
        <InputGroup className="mb-1">
          <InputGroup.Text id="basic-addon1" style={{ background: '#FA7436' }}><img className='text-white' src={user} alt="Email" style={{ height: '1.6rem'}}/></InputGroup.Text>
          <Form.Control
            placeholder="Username"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </InputGroup>

          {/* Segundo input */}
        <InputGroup className="mb-2">
          <InputGroup.Text id="basic-addon1" style={{ background: '#FA7436' }}><img className='text-white' src={contrasena} alt="Email" style={{ height: '1.6rem'}}/></InputGroup.Text>
          <Form.Control
            placeholder="Password"
            type="password"
            aria-describedby="basic-addon1"
          />
        </InputGroup>


        
        {/* Olvide mi contraseña */}
        <div className='d-flex justify-content-center mt-2'>
          <div>
            <a href="#" className='text-decoration-none fw-bold fst-italic' style={{ color: '#FA7436', fontSize: '0.9rem'}}>Forgot your password?</a>
          </div>
        </div>
        
        {/* Botón de inicio de sesión */}
        <div className='btn text-white w-100 mt-3 fw-bold shadow-sm' style={{ background: '#FA7436' }}>Login</div>
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
        <div className='btn d-flex gap-2 justify-content-center border mt-3 shadow-sm'>
          <img src={google} alt="" style={{ height: '1.6rem' }} />
          <div className='fw-bold text-secondary'>Continue with Google</div>
        </div>
      </div>
    </div>
  )
}

export default LoginSignIn;
