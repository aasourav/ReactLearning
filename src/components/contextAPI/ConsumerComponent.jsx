import React from "react"
export default class ConsumerComponent extends React.Component{ 
    render(){
        const {theme,color} = this.props
        console.log(theme,color)
        return(
            <h1 style={{color:color, backgroundColor:theme}}>Hello I am Consumer with React ContextAPI</h1>
        )
    }
    
}