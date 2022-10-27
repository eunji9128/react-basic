import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col } from 'react-bootstrap'
import axios from 'axios'

let count = 0;

function Main(props)
    {
        return (
            <>  
                <div className='main_bg'></div>

                <Container>
                <Row>
                {
                    props.shoes.map(function(a,i){
                    return (
                    <Card key={i} a = {a} i = {i} navigate = {props.navigate} ></Card>
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
                        let copy = [...props.shoes];
                        copy = copy.concat(result.data);  
                        props.setShoes(copy);
                    })
                    .catch(() => {
                        console.log('failed')
                    })
                }}>더 보기</button>
                : null
                }

            </>
    )}

function Card(props) {
    return (
        <Col sm={4}>
        <img 
            src={'https://codingapple1.github.io/shop/shoes' + (props.i+1) + '.jpg'} 
            onClick={()=>{ props.navigate('/detail/'+props.a.id)}}
            width = '80%' />
        <h4>{props.a.title}</h4>
        <p>{props.a.price}</p>
        </Col>
    );
    }

export default Main