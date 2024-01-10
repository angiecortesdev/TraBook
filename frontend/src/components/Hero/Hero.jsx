import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import tourist from'../assets/tourist.png'
import './Hero.css';

const Hero = () => {
	return (
		<Container>
			<Row>
				<Col>
					<div className="hero">
						<div className="hero-left">
							<h2>Get started your exciting <span>journey</span>  with us.</h2>
							<p>
								A Team of experienced tourism professionals will provide you with the best advice and
								tips for your desire place.
							</p>
						</div>
						{/* Boton */}
						<div className="hero-lastest-btn">
							<div> Discover Now</div>
						</div>
						<div className="hero-right">
						<img style={{ width: '600px' }} src={ tourist } alt='Tourist'/>
						</div>
					</div> 
				</Col>
			</Row>
		</Container>
	);
};

export default Hero;
