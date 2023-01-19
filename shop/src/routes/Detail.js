import { useParams } from "react-router-dom";

function Detail(props) {
    let {id} = useParams();
    var idx = props.products.findIndex((e) => e.id === parseInt(id));

    return (
        <div className="container">
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