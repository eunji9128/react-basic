import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Nav } from 'react-bootstrap';

function Detail(props) {
    let { id } = useParams();
    let [ event, setEvent ] = useState(true);
    let idx = props.products.findIndex((e) => e.id === parseInt(id));
    let [ tab, setTab ] = useState(1);

    useEffect(() => {
        setTimeout(() => { setEvent(false) }, 5000)
    })

    return (
        <div className="container">
            {/* event timer */}
            {
                event == true
                    ? <div className='alert alert-warning'>5초 이내 구매 시 할인</div>
                    : null
            }

            {/* product detail */}
            <div className="row">
                <div className="col-md-6">
                    <img src={`https://codingapple1.github.io/shop/shoes${parseInt(id) + 1}.jpg`} width="100%" />
                </div>
                <div className="col-md-6">
                    <h4 className="pt-5">{props.products[idx].title}</h4>
                    <p>{props.products[idx].content}</p>
                    <p>{props.products[idx].price}원</p>
                    <button className="btn btn-danger">주문하기</button>
                </div>
            </div>

            {/* tab layout */}
            <Nav variant="tabs" defaultActiveKey="link-0">
                <Nav.Item>
                    <Nav.Link onClick={()=>{ setTab(0) }} eventKey="link-0">Tab 1</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link onClick={()=>{ setTab(1) }} eventKey="link-1">Tab 2</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link onClick={()=>{ setTab(2) }} eventKey="link-3">Tab 3</Nav.Link>
                </Nav.Item>
            </Nav>
            <TabContent tab = {tab}/>
        </div>
    )
}

function TabContent(props) {
    if (props.tab == 0) {
        return <div>content 0</div>
    } else if (props.tab == 1) {
        return <div>content 1</div>
    } else if (props.tab == 2) {
        return <div>content 2</div>
    }
}

export default Detail;