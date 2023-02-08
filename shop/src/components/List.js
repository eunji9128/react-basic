import { Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function List(props) {
  let navigate = useNavigate();

  return (
    <Row>
      {
        props.products.map(function (data, i) {
          return (
            <Col sm={4} key={i}>
              <img 
                className='product-img' 
                src={`https://codingapple1.github.io/shop/shoes${data.id + 1}.jpg`} 
                onClick={()=>{ navigate('detail/' + data.id) }} 
                width="80%" 
              />
              <h4>{data.title}</h4>
              <p>{data.content}</p>
            </Col>
          )
        })
      }
    </Row>
  )
}

export default List;