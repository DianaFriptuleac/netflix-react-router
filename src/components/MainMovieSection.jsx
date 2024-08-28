import { Container, Row, Col, Dropdown } from "react-bootstrap"
const MainMovieSection = () =>{
    return (
        <div className='bg-black'>
        <Container fluid>
        <Row className="my-3 align-items-center mx-2">
       
              <Col xs='auto'>
                <h2 className='text-light'>TV Shows</h2>
              </Col>
              <Col xs='auto'>
                <Dropdown className='dropdown-outline'>
                  <Dropdown.Toggle variant="outline-light" id="dropdown-basic">
                    Genres
                  </Dropdown.Toggle>
  
                  <Dropdown.Menu>
                    <Dropdown.Item href="#/comedy">Comedy</Dropdown.Item>
                    <Dropdown.Item href="#/drama">Drama</Dropdown.Item>
                    <Dropdown.Item href="#/thriller">Thriller</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Col>
           
            <Col className='text-end'>
            <i className="bi bi-grid icons text-light me-3 center-icon"></i>
            <i className="bi bi-grid-3x3 icons text-light center-icon"></i>
            </Col>
          </Row>
          </Container>
      </div>
    )
}
export default MainMovieSection