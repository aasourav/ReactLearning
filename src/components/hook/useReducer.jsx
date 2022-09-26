import { useReducer } from "react";
const initialState = 0; //can be ojbect
const reducer = (state,action)=>{ //param can be obj
    switch(action){
        case 'increment':
            return state + 1;
        case 'decrement':
            return state -1;
        default:
            return state;
    }
}
export default function UseReducer(){
    const [count, dispatch] = useReducer(reducer,initialState)
    return(
        <div>
            <div>Count - {count}</div>
            <button onClick={()=>dispatch('increment')} type="button">Increment</button>
            <button onClick={()=>dispatch('decrement')} type="button">Decrement</button>
        </div>
    )
}