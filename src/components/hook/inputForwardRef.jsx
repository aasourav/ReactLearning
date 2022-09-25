import React from "react";
function Input({type,placeholder},ref){// 1. 2nd 
    //parameter hisebe ref dite hobe
    return <input type={type} placeholder={placeholder}
        ref = {ref} //2. ref er moddhe seta assign korte hobe
    />
}
//React.forwardRef() fn er moddhe Input Component ke assign
//korte hobe.
// React.forwardRef(Input);

 export default React.forwardRef(Input);