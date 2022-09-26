import { useReducer } from "react";

///This is for local state.

const initialState = 0; //can be ojbect
const initialState1 = 1;
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
export default function UseReducer2(){
    const [count, dispatch] = useReducer(reducer,initialState)
    const [count1, dispatch1] = useReducer(reducer,initialState)
    
    return(
        <>
        <div>
            <div>Count - {count}</div>
            <button onClick={()=>dispatch('increment')} type="button">Increment</button>
            <button onClick={()=>dispatch('decrement')} type="button">Decrement</button>
        </div>
        <div>
            <div>Count - {count1}</div>
            <button onClick={()=>dispatch1('increment')} type="button">Increment1</button>
            <button onClick={()=>dispatch1('decrement')} type="button">Decrement1</button>
        </div>
        </>
        
    )
}