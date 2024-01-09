import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Hero from '../components/Hero/Hero'

const Home = () => {
  return (

    <Container>
      <Row>
        <Col>
          <Hero />
        </Col>
      </Row>
    </Container>

  )
}

export default Home