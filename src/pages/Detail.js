import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Nav } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux'
import { addToCart } from './../store/stockSlice'

function Detail(props) {

    let state = useSelector((state)=>{return state})
    let dispatch = useDispatch()

    let [pop, setPop] = useState(true);
    let [num, setNum] = useState(false);
    let [tab, setTab] = useState(0);
    let [fade, setFade] = useState('');
    let {id} = useParams();
    let shoe = props.shoes.find( x => x.id == id );
    
    useEffect(()=>{
        addToWatched(id)
    },[])

    useEffect(()=>{

        setFade('end')

        return () => {
            setFade('')
        }
    })

    return(
        
        <div className={"container start " + fade}>
            {/* { pop == true ? 
                <div className="alert alert-warning"> 2초 이내 구매 시 할인 </div> : null }

            <input onChange={(e) => setNum(e.target.value)}/> */}
            
            <div className="row">
                <div className="col-md-6">
                    <img src={"https://codingapple1.github.io/shop/shoes"+ (shoe.id+1) +".jpg"} width="100%" />
                </div>
                <div className="col-md-6">
                    <h4 className="pt-5">{shoe.title}</h4>
                    <p>{shoe.content}</p>
                    <p>{shoe.price}</p>
                    <button className="btn btn-danger" onClick={()=>{
                        console.log(shoe)
                        dispatch(addToCart(shoe))
                    }}>주문하기</button> 
                </div>
            </div>

            <Nav variant='tabs' defaultActiveKey='link0'>
                <Nav.Item>
                    <Nav.Link onClick={() => {setTab(0)}} eventKey='link0'>버튼0</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link onClick={() => {setTab(1)}} eventKey="link1">버튼1</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link onClick={() => {setTab(2)}} eventKey="link2">버튼2</Nav.Link>
                </Nav.Item>
            </Nav>
            <TabContents tab = {tab} fade = {fade} setFade = {setFade} shoes = {props.shoes}/>
        </div>
    )
}


function addToWatched(a){
    let copy = localStorage.getItem('watched')
    copy = JSON.parse(copy)
    if ( copy.findIndex((x)=>{return x == a}) == -1 ){ 
        copy.push(a)
        localStorage.setItem('watched', JSON.stringify(copy))
    }
    
}

function TabContents(props){

    useEffect(()=> {
        let a = setTimeout(()=>{ props.setFade('end') }, 100)

        return ()=>{
            clearTimeout(a)
            props.setFade('')
        }
    }, [props.tab])

    return (
        <div className={"start " + props.fade}>
            {[<div>{props.shoes[0].title}</div>, <div>내용1</div>, <div>내용2</div>][props.tab]}    
        </div>
    )
}

export default Detail;
