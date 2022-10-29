import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import './../styles/Navbar.css'
const header = () => {
  return (
    <Navbar>
        <Container className='containerNav'>
            <div className='leftNav'>
                <Navbar.Brand>
                <img
                    src="https://www.nasa.gov/sites/default/files/images/nasaLogo-570x450.png"
                    width="100"
                    height="79"
                    className="d-inline-block align-top"
                    alt="React Bootstrap logo"
                />
                </Navbar.Brand>
                <h1 className='nasaName'>Sahil Sharma</h1>
            </div>
            <div className='midNav'>
                <h1>astronomy picture of the day</h1>     
            </div>
            <div className='rightNav'>

            </div>
        </Container>
      </Navbar>
  )
}

export default header