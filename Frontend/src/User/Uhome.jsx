import React from 'react'
import Unavbar from './Unavbar'
import "./uhome.css"
import { Button, Card } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Footer from '../Componenets/Footer'


const Uhome = () => {
  const navigate=useNavigate()
  const  products=()=>{
 navigate('/uproducts')
  }
  return (
    <div>
      <Unavbar/>
      
      <div>
      <h1 className='text-center' style={{fontSize:"50px"}}>Best Seller</h1>
      <div  style={{display:"flex",justifyContent:"center"}}>
  {/* <hr style={{ height: "px", width:"250px",color:"black", backgroundColor:"black"}} /> */}
  <br/>
  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
  <Card style={{ width: '18rem' ,marginRight:"80px"}}>
  <Link to='/uproducts'>
    <Card.Img variant="top" src="https://m.media-amazon.com/images/I/61rnjgTxjUL._SY425_.jpg" />
    </Link>
    <Card.Body>
      <Card.Title className='text-center'>I DON'T LOVE YOU<br/>ANYMORE</Card.Title>
    </Card.Body>
  </Card>

  <Card style={{ width: '18rem' ,marginRight:"80px"}}>
  <Link to='/uproducts'>
    <Card.Img variant="top" src="https://m.media-amazon.com/images/I/71zpck45b2L._SL1500_.jpg" />
    </Link>
    <Card.Body>
      <Card.Title className='text-center'>CAN WE BE<br/>STRANGERS AGAIN?</Card.Title>
    </Card.Body>
  </Card>

  <Card style={{ width: '18rem',marginRight:"80px" }}>
  <Link to='/uproducts'>
    <Card.Img variant="top" src="https://m.media-amazon.com/images/I/715qi-cIbML._SY466_.jpg" />
    </Link>
    <Card.Body>
      <Card.Title className='text-center'>DON'T BELIEVE EVERYTHING<br/>YOU THINK</Card.Title>
     
    
    </Card.Body>
  </Card>

  <Card style={{ width: '18rem'}}>
  <Link to='/uproducts'>
    <Card.Img variant="top" src="https://m.media-amazon.com/images/I/41PCRXbVY8L._SY445_SX342_.jpg" />
    </Link>
    <Card.Body>
      <Card.Title className='text-center'>THE POWER OF YOUR<br/>SUBCONSCIOUS MIND</Card.Title>
    </Card.Body>
  </Card>
</div>

  </div>
  <br/>
  <br/>
  <br/>
  <div>
      <h1 className='text-center' style={{fontSize:"50px"}}>Top Recomendation</h1>
      <div  style={{display:"flex",justifyContent:"center"}}>
  {/* <hr style={{ height: "px", width:"250px",color:"black", backgroundColor:"black"}} /> */}
  <br/>
  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
  <Card style={{ width: '18rem' ,marginRight:"80px"}}>
  <Link to='/uproducts'>
    <Card.Img variant="top" src="https://m.media-amazon.com/images/I/61cxW8Axu1L._SY342_.jpg" />
    </Link>
    <Card.Body>
      <Card.Title className='text-center'>NEVER SPLIT THE<br/>DIFFERENCE</Card.Title>
    </Card.Body>
  </Card>

  <Card style={{ width: '18rem' ,marginRight:"80px"}}>
  <Link to='/uproducts'>
    <Card.Img variant="top" src="https://m.media-amazon.com/images/I/81T05w0B3lL._SY342_.jpg" />
    </Link>
    <Card.Body>
      <Card.Title className='text-center'>YOU CAN </Card.Title>
    </Card.Body>
  </Card>

  <Card style={{ width: '18rem',marginRight:"80px" }}>
  <Link to='/uproducts'>
    <Card.Img variant="top" src="https://m.media-amazon.com/images/I/61RlLYVbDSL._SY342_.jpg" />
    </Link>
    <Card.Body>
      <Card.Title className='text-center'>BELIEVE IN<br/>YOURSELF</Card.Title>
     
    
    </Card.Body>
  </Card>

  <Card style={{ width: '18rem'}}>
  <Link to='/uproducts'>
    <Card.Img variant="top" src="https://m.media-amazon.com/images/I/61xivWmExiL._SY342_.jpg" />
    </Link>
    <Card.Body>
      <Card.Title className='text-center'>THE MOUNTAIN IS<br/>YOU</Card.Title>
    </Card.Body>
  </Card>
</div>
</div>
</div>
      </div>
      <br/>
     <Footer/>
          </div>
  )
}

export default Uhome