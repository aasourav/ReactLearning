import React from "react";
import ConsumerComponent from "./ConsumerComponent";
import ThemeContext from "./ThemeContext";
class ContextApp extends React.Component{
    render(){
        return(
            <div>
               <ThemeContext.Consumer>
                    {({theme,color})=>(<ConsumerComponent theme={theme} color={color} />)}
               </ThemeContext.Consumer>
            </div>
        )
    }
    
}
export default ContextApp;