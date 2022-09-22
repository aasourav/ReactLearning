import React from "react";
export default class HoverCounter extends React.Component{
    render(){
        const {count, increment} = this.props
        return(
            
            <div>
                <button type="button" onMouseOver={increment}>
                    Hovered {count} times
                </button>
            </div>
        )
    }
}