import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail(props) {
    let {id} = useParams();
    let [event, setEvent] = useState(true);
    var idx = props.products.findIndex((e) => e.id === parseInt(id));

    useEffect( () => {
        setTimeout( () => {setEvent(false)}, 5000 )
    } )

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
                    <h4 className="pt-5">{ props.products[idx].title }</h4>
                    <p>{ props.products[idx].content }</p>
                    <p>{ props.products[idx].price }원</p>
                    <button className="btn btn-danger">주문하기</button>
                </div>
            </div>
        </div>
    )
} 

export default Detail;