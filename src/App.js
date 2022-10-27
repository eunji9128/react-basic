import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Nav, Navbar, Row, Col } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import data from './data';
import Detail from './pages/Detail'
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom'
import axios from 'axios'
import Cart from './pages/Cart'
import { useQuery } from '@tanstack/react-query'

let count = 0;

function App() {

  let result = useQuery(['query_data'], ()=>{
    return(
      axios.get('https://codingapple1.github.io/userdata.json')
      .then((a)=>{ return a.data })
    )
  })

  useEffect(()=>{
    if (localStorage.getItem('watched') == null) {
      return(
      localStorage.setItem('watched', JSON.stringify([]))
      )}
  },[])


  let [shoes, setShoes] = useState(data);
  let navigate = useNavigate();

  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Shop</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link onClick={() => {navigate('/')}}>Home</Nav.Link>
              <Nav.Link onClick={() => {navigate('/cart')}}>Cart</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <Nav className='ms-auto'>
            { result.isLoading && '로딩중' }
            { result.error && '에러남' }
            { result.data && result.data.name }
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route path='/' element={
          <>  
            <div className='main_bg'></div>

            <Container>
            <Row>
              {
                shoes.map(function(a,i){
                  return (
                  <Card key={i} a = {a} i = {i}></Card>
                  )
                })
              }        
            </Row>
            </Container>
            
            {  count < 2 ?
              <button onClick={() => {
                count = count + 1;
                axios.get("https://codingapple1.github.io/shop/data" + (count+1) + ".json")
                  .then((result) => {
                    let copy = [...shoes];
                    copy = copy.concat(result.data);  
                    setShoes(copy);
                  })
                  .catch(() => {
                    console.log('failed')
                  })
              }}>더 보기</button>
              : null
            }

          </>
        }/>

        <Route path='/detail/:id' element={
            <Detail shoes = {shoes}></Detail>         
        }/>

        <Route path='/cart' element={<Cart />}></Route>

        <Route path='*' element={<div>없는 페이지입니다</div>} />

      </Routes>
    </div>
  );
}

function Card(props) {
  return (
    <Col sm={4}>
      <img src={'https://codingapple1.github.io/shop/shoes' + (props.i+1) + '.jpg'} width = '80%' />
      <h4>{props.a.title}</h4>
      <p>{props.a.price}</p>
    </Col>
  );
}

// function Event() {
//   return (
//     <>
//       <h4>오늘의 이벤트</h4>
//       <Outlet></Outlet>
//     </>
//   )
// }

export default App;
