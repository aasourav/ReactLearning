import { useEffect, useRef } from 'react';
import InputForwardRef from './inputForwardRef';

export default function AutoFocus(){
    const inputRef = useRef(); //initialize

    //now we must have to confirm component
    //first rendered. that's why we use UseEffect.
    //inside the useEffect then we change the dom 
    //action.
    useEffect(()=>{
        inputRef.current.focus();
    },[])

    return(
        <p>
            {/* we do not need to get elementb by using
             getelemtn by id we use ref*/}
            {/* <input ref={inputRef} type="text" placeholder='input' /> */}
            {/* but jodi input ta ekta component hoy
            sejonno amader forward ref use korte hobe. */}
            {/* see InputforwardRef.jsx file */}
            <InputForwardRef ref={inputRef} type="text" placeholder="name"/>
        </p>
    )
}
//Note:
    //inputRef.current e value assighn kore otake golbally
    // use korte pari. (should learn more)
    //eta change e re render hoy nah.