import React from "react";
import ShowingComponent from "./ShowintComponent";
import ThemeContext from "./Theme";
export default class AppContext extends React.Component{
    state={
        theme:'orange',
        bgTheme:'black',
    }
    render(){
        const {theme,bgTheme} = this.state
        return(
            <div>
                <ThemeContext.Provider value={{theme:theme,bgTheme:bgTheme}}>
                    <ShowingComponent/>
                </ThemeContext.Provider>
            </div>
        )
    }
}