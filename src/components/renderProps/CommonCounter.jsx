import React from "react";
export default class CommonCounter extends React.Component{
    state = {
        count: 0,
    }
    increment = ()=>{
        this.setState((prevState)=>({
            count: prevState.count + 1
        }))
    }
    render(){
        const {render}= this.props
        // jodi Children akare data dei tahole 
        // const {children}  = this.props hobe.
        
        const {count} = this.state
        return render(count, this.increment); 
    }
}