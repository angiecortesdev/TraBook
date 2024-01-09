import './Hero.css';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
const Hero = () => {
	return (
		<Container>
			<Row>
				<Col>
					<div className="hero">
						<div className="hero-left">
							<h2>Get started your exciting journey with us.</h2>
						</div>
						<div>
							<p>
								A Team of experienced tourism professionals will provide you with the best advice and tips for your
								desire place.
							</p>
						</div>
						{/* Boton */}
						<div className="hero-lastest-btn">

						</div>
						<div className="hero-right" />
					</div>
				</Col>
			</Row>
		</Container>
	);
};

export default Hero;
