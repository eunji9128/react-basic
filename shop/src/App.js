import './App.css';
import { Navbar, Container, Nav, Row, Col } from 'react-bootstrap';
import product_data from './data.js';
import { useState } from 'react';
import { Route, Routes, Link } from 'react-router-dom';

function App() {
  let [products, setProducts] = useState(product_data);

  return (
    <div className="App">
      {/* navbar */}
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/detail">Details</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route path='/' element={
          <>
            {/* main background */}
            <div className='main-bg'></div>

            {/* product display */}
            <Container>
              <Row>
                <List products={products} />
              </Row>
            </Container>
          </>
        } />
        <Route path='/detail' element={<div>상세 페이지</div>} />
        <Route path='/about' element={<div>어바웃 페이지</div>} />
      </Routes>




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
