import { useState } from "react";
export default function(){
    const [count,setCount] = useState(0);
    const [data,setData] = useState({
        name:'',
        id:''
    })
    const {name,id} = data;
    return(
        <div>
            <input type="text" onChange={(e)=>(
                setData({
                    //must be sprade before update
                    ...data,
                    name: e.target.value
                })
            )}/>
            <input type="text" onChange={(e)=>(
                setData({
                    //must be sprade before update
                    ...data,
                    id: e.target.value
                })
            )}/>
            <button  onClick={(e)=> setCount((prevVal)=> prevVal+1)}>
               Clicked {count} times
            </button>
            <p>{name}</p>
        </div>
    )
}