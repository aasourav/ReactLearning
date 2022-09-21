import React from "react";
class Button extends React.Component{
    render(){
        // console.log("Button is Called")
        return(
            <button onClick={this.props.change} className="btn">
                    ClickHereToChange
            </button>
        )
    }
}
export default Button