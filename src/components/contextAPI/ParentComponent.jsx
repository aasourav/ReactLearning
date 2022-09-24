import React from "react";
import ContextApp from "./ContextApp";
import ThemeContext from "./ThemeContext";

export default class ParentComponent extends React.Component{
    state={
        theme: 'green',
        color: 'white'
    }
    render(){
        const {theme,color} = this.state
        return(
            <ThemeContext.Provider value={{theme:theme,color:color}}>
                <ContextApp/>
            </ThemeContext.Provider>
        )
    }
}