import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Nav, Navbar, Row, Col } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import data from './data';
import Main from './pages/Main'
import Detail from './pages/Detail'
import Cart from './pages/Cart'
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom'
import axios from 'axios'
import { useQuery } from '@tanstack/react-query'



function App() {

  let [shoes, setShoes] = useState(data);
  let navigate = useNavigate();
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

  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand onClick={() => {navigate('/')}}>Shop</Navbar.Brand>
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
          <Main shoes = {shoes} setShoes = {setShoes} navigate = {navigate} ></Main>
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



// function Event() {
//   return (
//     <>
//       <h4>오늘의 이벤트</h4>
//       <Outlet></Outlet>
//     </>
//   )
// }

export default App;
