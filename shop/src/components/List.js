import { Col } from 'react-bootstrap';

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

export default List;