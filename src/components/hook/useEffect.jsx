import { useEffect, useState } from "react";
export default function UseEffect(){
    const [count, setCount] = useState(0);
    const [date,setDate] = useState(new Date());
    const tick = ()=>{
        setDate(new Date());
    }

    useEffect(()=>{
        document.title = `clicked ${count} times`
    },[count]) //2nd parameter kon ta call hole se kaj korbe
    //useEffect fn er moddhe emon var/fn use hoise jegula 
    //local var  na(our created var/fn outside the
    //useEffect) segulo amader 2nd parametere dite hobe.
    // [] erokom blank thakle se ekbar call hobe.
    ///component did mount er moto
    useEffect(()=>{
        const interval = setInterval(tick,1000);
        
        //eta unmount er kaj korbe.
        // jokhon component ta hide hoye jabe displya theke
        // thokhon ei jinista kaj korbe.
        return ()=>{
            clearInterval(interval)
        }
    },[date])
    return(
        <div>
            <p>Time: {date.toLocaleTimeString()}</p>
            <button onClick={(e)=>(setCount((prevState)=>(prevState+1)))}>Click Here To count</button>
        </div>
    )
}