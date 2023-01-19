import './App.css';
import { Navbar, Container, Nav, Row } from 'react-bootstrap';
import product_data from './data.js';
import { useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Detail from './routes/Detail.js';
import About from './routes/About.js';
import Event from './routes/Event.js';
import List from './components/List.js';

function App() {
  let [products, setProducts] = useState(product_data);
  let navigate = useNavigate();

  return (
    <div className="App">
      {/* navbar */}
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="/">ShoeShop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/detail">Details</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/event">Event</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      {/* define routes */}
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
        <Route path='/detail/:id' element={ <Detail products={products} /> } />
        <Route path='/about' element={ <About/> }>
          <Route path='member' element={ <div>members</div> }/>
          <Route path='location' element={ <div>location</div> }/>
        </Route>
        <Route path='/event' element={ <Event/> }>
          <Route path='one' element={ <div>첫 주문 시 50% 할인</div> }/>
          <Route path='two' element={ <div>생일 기념 쿠폰 받기</div> }/>
        </Route>
      </Routes>
    </div>

  );
}

export default App;
