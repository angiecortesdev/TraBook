// import './NavBar.css';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const NavBar = () => {
	return (
		<Navbar expand="lg md sm">
			<Container>
				<Navbar.Brand href="/" className='mx-1'>
					<Link to="/">
						<img src={logo} alt="logo-trabook" />
					</Link>
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="my-2 my-lg-2 mx-auto" style={{ maxHeight: '220px' }} navbarScroll>
						<Nav.Link style={{ fontWeight: '600' }} href="/">Home</Nav.Link>
						<Nav.Link style={{ fontWeight: '600' }} href="#action2">About</Nav.Link>
						<Nav.Link style={{ fontWeight: '600' }} href="#destination">Destination</Nav.Link>
						<Nav.Link style={{ fontWeight: '600' }} href="#tour">Tour</Nav.Link>
						<Nav.Link style={{ fontWeight: '600' }} href="#action2">Blog</Nav.Link>
					</Nav>
					<Form className="d-flex">
						<Button className="me-2 px-5 py-2" variant="white" ><Link style={{ textDecorationLine: 'none', color: '#FA7436'}} to="/login">Login</Link></Button>
						<Button style={{ background: '#FA7436'}} className="me-5 px-5 py-2" variant="light"><Link style={{ textDecorationLine: 'none', color: 'white'}} to="/register">Sign up</Link></Button>
					</Form>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default NavBar;
