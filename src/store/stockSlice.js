import { createSlice } from '@reduxjs/toolkit'

let stock = createSlice({
    name: 'stock',
    initialState:
    [
        {id : 0, name : 'White and Black', count : 2},
        {id : 2, name : 'Grey Yordan', count : 1}
    ],
    reducers: {
        addStock(state, action){
            let idx = state.findIndex((x)=>{ return x.id == action.payload })
            state[idx].count++
        },
        
        addToCart(state, action){
            if (state.findIndex((x)=>(x.id == action.payload.id)) == -1) {
                console.log(action.payload.id)
                state.push({id : action.payload.id, name : action.payload.title, count : 1})
                console.log(JSON.stringify(state))
            }
            else {
                let idx = state.findIndex((x)=>{ return x.id == action.payload.id })
                state[idx].count++
            }
        },
        
        deleteStock(state, action){
            let idx = state.findIndex((x)=>{ return x.id == action.payload })
            state.splice(idx, 1)
            console.log(JSON.stringify(state))
        }
    }
})

export let { addStock, addToCart, deleteStock } = stock.actions

export default stock