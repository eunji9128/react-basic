import { Table } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { increase } from './../store/userSlice'
import { addStock, deleteStock } from './../store/stockSlice'

function Cart() {

    let state = useSelector((state)=>{return state})
    let dispatch = useDispatch()

    return (
        <div>
            <h6>{state.user.name} {state.user.age} 의 장바구니</h6>
            <button onClick={()=>{dispatch(increase(100))}}>버튼</button>
            <Table>
                <thead>
                    <tr>
                    <th>#</th>
                    <th>상품명</th>
                    <th>수량</th>
                    <th>변경하기</th>
                    </tr>
                </thead>
                
                {state.stock.map(function(a, i){
                    return (
                    <tbody key={i}>
                        <tr>
                            <td>{state.stock[i].id}</td>
                            <td>{state.stock[i].name}</td>
                            <td>{state.stock[i].count}</td>
                            <td>
                                <button onClick={()=>{dispatch(addStock(state.stock[i].id))}}>+</button>
                                <button onClick={()=>{dispatch(deleteStock(state.stock[i].id))}}>삭제</button>
                            </td>
                        </tr>
                    </tbody>


                    )
                })}
            </Table>
        </div>
    )
}

export default Cart;