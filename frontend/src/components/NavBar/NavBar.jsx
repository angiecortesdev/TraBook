import './NavBar.css'
import logo from '../assets/logo.png'
import { useState } from 'react'
import { Link } from 'react-router-dom'


const  NavBar = () => {

    const [menu, setMenu] = useState("home")

    return(
        <>
            <div className='navbar'>
                <div className='nav-logo'>
                    <img src={ logo } alt="logo-trabook" />
                </div>
                <ul className='nav-menu'>
                    <li onClick={() => {setMenu("home")}}><Link style={{ textDecoration: 'none' }} to='/'>Home</Link>{menu === "home"? <hr />:<></>}</li>
                    <li onClick={() => {setMenu("about")}}>About {menu === "about"? <hr />:<></>}</li>
                    <li onClick={() => {setMenu("destinations")}}><Link style={{ textDecoration: 'none' }} to='/destinations'>Destination</Link>{menu === "destinations"? <hr />:<></>}</li>
                    <li onClick={() => {setMenu("tours")}}><Link style={{ textDecoration: 'none' }} to='/tours'>Tour</Link>{menu === "tours"? <hr />:<></>}</li>
                    <li onClick={() => {setMenu("blogs")}}>Blog {menu === "blogs"? <hr />:<></>}</li>
                </ul>
                <div className="nav-login-signUp">
                    <Link style={{ textDecoration: 'none' }} to='/login'><button className='login'>Login</button></Link>
                    <Link style={{ textDecoration: 'none' }} to='/register'><button className='register'>Sign Up</button></Link>
                </div>
            </div>
        </>
    )
}


export default NavBar;