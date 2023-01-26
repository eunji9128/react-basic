import { Row, Col } from 'react-bootstrap';

function List(props) {
  return (
    <Row>
      {
        props.products.map(function (data, i) {
          return (
            <Col sm={4} key={i}>
              <img src={`https://codingapple1.github.io/shop/shoes${data.id + 1}.jpg`} width="80%" />
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