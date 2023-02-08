import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ListGroupItem, Nav } from 'react-bootstrap';

function Detail(props) {
    let { id } = useParams();
    let [ event, setEvent ] = useState(true);
    let idx = props.products.findIndex((e) => e.id === parseInt(id));
    let [ tab, setTab ] = useState(0);
    let [ tab_fade, setTabFade ] = useState('');
    let [ comp_fade, setCompFade ] = useState('');

    useEffect(() => {
        setTimeout(() => { setEvent(false) }, 5000)
        setCompFade('end');
    })

    useEffect(() => {
        setTimeout(() => { setTabFade('end') }, 100)
        return () => {
            setTabFade('');
        }
    }, [tab])

    return (
        <div className={'container start '+ comp_fade}>
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
            <TabContent tab = {tab} tab_fade = {tab_fade}/>
        </div>
    )
}

function TabContent(props) {
    return (
        <div className={'start '+ props.tab_fade}>
            {
                [<div className="content">content 0: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti deserunt commodi molestias sequi? Nobis natus, magnam debitis nisi quo eos odit? Dicta mollitia quo repellat aspernatur. Natus molestiae debitis veritatis.</div>, 
                <div className="content">content 1: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti deserunt commodi molestias sequi? Nobis natus, magnam debitis nisi quo eos odit? Dicta mollitia quo repellat aspernatur. Natus molestiae debitis veritatis.</div>, 
                <div className="content">content 2: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti deserunt commodi molestias sequi? Nobis natus, magnam debitis nisi quo eos odit? Dicta mollitia quo repellat aspernatur. Natus molestiae debitis veritatis.</div>][props.tab]
            }
        </div>
    )
}

export default Detail;