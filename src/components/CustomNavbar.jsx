import { Navbar, Container, Nav } from 'react-bootstrap'
import { Link, useLocation } from "react-router-dom";

const CustomNavbar = function () {

  const location = useLocation(); 
  //classe active per i link
  const addActiveOrNot = (path) => {
    return location.pathname === '/' + path ? 'nav-link active' : 'nav-link'
  }

  return (
    <Navbar collapseOnSelect expand="md" bg="black" data-bs-theme="dark">
      <Container fluid>
        <Link to ='/' className="text-decoration-none">
        <Navbar.Brand >
            <img src="/assets/logo.png" style={{ width: '100px', height: '55px' }} alt="Logo" />
        </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          <Link to="/" className={addActiveOrNot('home')}>
             Home
            </Link>
            <Link to="/tvshows" className={addActiveOrNot('tvshows')}>
              Tv Shows
            </Link>
            <Link to="/movies" className={addActiveOrNot('movies')}>
              Movies
            </Link>
            <Link to="/newadded" className={addActiveOrNot('newadded')}>
              Recently Added
            </Link>
            <Link to="/mylist" className={addActiveOrNot('mylist')}>
              My List
            </Link>
          </Nav>
          <Nav className="ms-auto">
          <Link to="/search" className={addActiveOrNot('searcht')}>
           <i className="bi bi-search"></i> </Link>
           <Link to="/kids" className={addActiveOrNot('kids')}>
             KIDS
            </Link>
            <Link to="/settings" className={addActiveOrNot('settings')}><i className="bi bi-bell-fill"></i></Link>
            <Link to="/profile" className={addActiveOrNot('profile')}><i className="bi bi-person-circle icons"></i></Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default CustomNavbar
