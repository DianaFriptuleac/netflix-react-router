import { Col, Container, Row, Button } from "react-bootstrap"

const MyFooter = () => {
  return (
    <Container fluid >
      <Row className="bg-black justify-content-center align-items-center g-5">
        <Col xs={12} md={6} lg={3} className="text-secondary">
          <div className="media-icon mb-3">
            <i className="bi bi-facebook footer-icon me-2"></i>
            <i className="bi bi-instagram footer-icon me-2"></i>
            <i className="bi bi-twitter-x footer-icon me-2"></i>
            <i className="bi bi-youtube footer-icon"></i>
          </div>
          <p>Audio and Subtitles</p>
          <p>Madia Center</p>
          <p>Privacy</p>
          <p>Contact Us</p>
          <Button variant="outline-secondary">Service Code</Button>
          <p className="copyright mt-3">© 1997-2023 Netflix, Inc.</p>
        </Col>
        <Col xs={12} md={6} lg={2} className="text-secondary">
          <p>Audio Description</p>
          <p>Investor Relations</p>
          <p>Legal Notice</p>
        </Col>
        <Col xs={12} md={6} lg={2} className="text-secondary">
          <p>Help Center</p>
          <p>Jobs</p>
          <p>Cookie Preference</p>
        </Col>
        <Col xs={12} md={6} lg={2} className="text-secondary">
          <p>Gift Cards</p>
          <p>Terms of Use</p>
          <p>Corporate Information</p>
        </Col>
      </Row>
    </Container>
  )
}

export default MyFooter
