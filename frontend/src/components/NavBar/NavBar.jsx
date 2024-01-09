import './NavBar.css';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

const NavBar = () => {
	return (
		<>
            <div className="navbar">
			<div className="nav-logo">
				<Link to="/">
					<img src={logo} alt="logo-trabook" />
				</Link>
			</div>
			<ul className="nav-menu">
				<li>
					<Link style={{ textDecoration: 'none' }} to="/">
						Home
					</Link>
				</li>
				<li>About</li>
				<li>Destination</li>
				<li>Tour</li>
				<li>Blog</li>
			</ul>
			<div className="nav-login-signUp">
				<Link style={{ textDecoration: 'none' }} to="/login">
					<Button className="login">Login</Button>
				</Link>
				<Link style={{ textDecoration: 'none' }} to="/register">
					<Button className="register">Sign Up</Button>
				</Link>
			</div>
		    </div>
        </>
	);
};

export default NavBar;
