import './App.css';
import { Navbar, Container, Nav, Row, Col } from 'react-bootstrap';
import product_data from './data.js';
import { useState } from 'react';

function App() {
  let [products, setProducts] = useState(product_data);

  return (
    <div className="App">
      {/* navbar */}
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      {/* main background */}
      <div className='main-bg'></div>

      {/* product display */}
      <Container>
        <Row>
          <List products={products} />
        </Row>
      </Container>
    </div>

  );
}

function List(props) {
  return (
    props.products.map(function (data, i) {
      return (
        <Col key={i}>
          <img src={`https://codingapple1.github.io/shop/shoes${data.id + 1}.jpg`} width="80%" />
          <h4>{data.title}</h4>
          <p>{data.content}</p>
        </Col>
      )
    })
  )
}

export default App;
