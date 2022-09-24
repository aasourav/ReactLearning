import React from "react"
import RecivingValueComponent from "./RecivingValueComponent"
import ThemeContext from "./Theme"


export default class ShowingComponent extends React.Component{
    render(){
        return(
            <ThemeContext.Consumer>
                {({theme,bgTheme})=>(<RecivingValueComponent theme={theme} bgTheme={bgTheme}/>)}
            </ThemeContext.Consumer>
        )
    }
}