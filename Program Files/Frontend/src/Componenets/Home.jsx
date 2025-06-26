import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";


const Home = () => {
  return (
    <>
      {/* Navbar with an improved color scheme */}
      <Navbar bg="" variant="dark" expand="lg" style={{backgroundColor:"Black"}}>
        <Container>
          <Navbar.Brand ><Link to='/' style={{color:'white',textDecoration:"none"}}>BookNest</Link></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto" >
              <Link to="/login" style={{padding:"10px",color:"white",textDecoration:"none"}}>User</Link>
              <Link to="/slogin" style={{padding:"10px",color:"white",textDecoration:"none"}}>Seller</Link>
              <Link to="/alogin" style={{padding:"10px",color:"white",textDecoration:"none"}}>Admin</Link>  
              </Nav>
              </Navbar.Collapse>
              </Container>
              </Navbar> 

      {/* Main content section */}
      <div className='home-containert' style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '50px 20px' }}>
        
        <div className="right-side" style={{ flex: 1, paddingLeft: '40px' }}>
          <p style={{ fontSize: '1.2rem', lineHeight: '1.6' }}>
            <span style={{ fontSize: '2em', fontWeight: 'bold', color: 'Black' }}>Discover Your Next Read.</span><br /> {/* Primary action color */}
            <span style={{ fontSize: '1.5em', color: '#555' }}>Dive into a world of stories, knowledge, and adventure with BookNest.</span> <br />
            <span style={{ fontSize: '1.2em', color: '#777' }}>Find your perfect book and embark on a new journey today.</span><br />
            <Button variant='primary' className='mt-3 register'> {/* Using Bootstrap's primary button */}
              <Link to={'/Login'} style={{ color: 'Black', textDecoration: 'none' }}>Explore Books</Link>
            </Button>
          </p>
        </div>
      </div>
    </>
  );
};

export default Home;