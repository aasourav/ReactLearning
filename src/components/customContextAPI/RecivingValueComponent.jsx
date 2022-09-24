import React from "react"

export default class RecivingValueComponent extends React.Component{
    render(){
        const{theme,bgTheme} = this.props
        // console.log("hell",value)
        return(
            <h1 style={{color:theme,backgroundColor:bgTheme}}>I am Reciving value from Context api</h1>
        )
    }
}