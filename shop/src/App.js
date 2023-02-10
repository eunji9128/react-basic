import './App.css';
import { Navbar, Container, Nav, Row, Button } from 'react-bootstrap';
import product_data from './data.js';
import { useState } from 'react';
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import Detail from './routes/Detail.js';
import About from './routes/About.js';
import Event from './routes/Event.js';
import List from './components/List.js';
import axios from 'axios';

function App() {
  let [products, setProducts] = useState(product_data);
  let navigate = useNavigate();
  let [more_count, setMoreCount] = useState(1);
  let [more_btn, setMoreBtn] = useState(true);

  const MoreProduct = function () {
    setMoreCount(more_count + 1);
    if (more_count > 1) {
      setMoreBtn(false);
    };
    axios.get(`https://codingapple1.github.io/shop/data${more_count + 1}.json`)
      .then((res) => {
        var copy = [...products, ...res.data];
        setProducts(copy);
      })
      .catch(() => {
        console.log('failed');
      })
  }

  return (
    <div className="App">
        {/* navbar */}
        <Navbar bg="light" variant="light">
          <Container>
            <Navbar.Brand href="/">ShoeShop</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link onClick={()=>{navigate('/')}}>Home</Nav.Link>
              <Nav.Link onClick={()=>{navigate('/detail/0')}}>Detail</Nav.Link>
              <Nav.Link onClick={()=>{navigate('/about')}}>About</Nav.Link>
              <Nav.Link onClick={()=>{navigate('/event')}}>Event</Nav.Link>
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
                <List products={products} />
              </Container>

              {
                more_btn == true
                  ? <Button variant='secondary' onClick={MoreProduct}>more products</Button>
                  : null
              }

            </>
          } />
          <Route path='/detail/:id' element={<Detail products={products} />} />
          <Route path='/about' element={<About />}>
            <Route path='member' element={<div>members</div>} />
            <Route path='location' element={<div>location</div>} />
          </Route>
          <Route path='/event' element={<Event />}>
            <Route path='one' element={<div>첫 주문 시 50% 할인</div>} />
            <Route path='two' element={<div>생일 기념 쿠폰 받기</div>} />
          </Route>
        </Routes>
    </div>

  );
}

export default App;
