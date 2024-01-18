import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { GrFacebookOption } from "react-icons/gr";
import '../../index.css';


const Footer = () => {
  return (
    <>
        <Container>
            <Row>
                <Col>
                    <div className='footer-content'>
                        <p>Book your trip in minute, get full Control for much longer</p>
                        <GrFacebookOption />
                    </div>

                    {/* Company */}
                    <div className='footer-content'>
                        <h6>Company</h6>
                        <ul>
                            <li>About</li>
                            <li>Careers</li>
                            <li>Logistic</li>
                            <li>Polity & Policy</li>
                        </ul>
                    </div>
                    {/* Contact */}
                    <div className='footer-content'>
                        <h6>Contact</h6>
                        <ul className='list'>
                            <li>Help/FAQ</li>
                            <li>Press</li>
                            <li>Affilates</li>
                        </ul>
                    </div>

                    {/* More */}
                    <div className='footer-content'>
                        <h6>More</h6>
                            <ul>
                                <li>Press Centre</li>
                                <li>Our Blog</li>
                                <li>Low fare tips</li>
                            </ul>
                    </div>

                    {/* Bottom */}
                    <div className="d-flex">
                        <p>Copyright, Trabook 2023. All rights reserved</p>
                        <p>Terms & Conditions</p>
                    </div>
                </Col>
            </Row>
        </Container>
    </>
  )
}

export default Footer