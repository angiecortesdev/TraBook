import Button from 'react-bootstrap/Button';
import tourist from'../assets/tourist.png'
import '../../index.css';

const Hero = () => {
	return (
		<div className="hero">
			<div className="hero-left">
				<h2>Get started your exciting <span>journey</span><br />with us.</h2>
				<p>
					A Team of experienced tourism professionals will<br /> provide you with the best advice and
					tips for your<br /> desire place.
				</p>
				<Button className='hero-lastest-btn' style={{ background: 'white', border: '1px solid #FA7436', color: '#FA7436' }}>Discover Now</Button>
			</div>

			<div className="hero-right">
				<img className='mt-5 py-5' style={{ width: '500px' }} src={ tourist } alt='Tourist'/>
			</div>
		</div> 
	);
};

export default Hero;
