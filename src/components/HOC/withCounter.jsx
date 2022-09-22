import React from "react";

// HOC means Higher Order Component
//  it's a pattern that follow composition manner
// eta parameter hisebe ekta component ney
// and return kore ekta new component
// HOC
const withCounter = (OriginalComponent)=>{
    class NewComponent extends React.Component{
        state ={
            count:0,
        }
        increment = ()=>{
            this.setState((prevState)=>(
                {count: prevState.count + 1}
            ))
        }
        render(){
            const {count} = this.state
            return <OriginalComponent count={count}
                    increment={this.increment}/>
        }
    }
    return NewComponent;
}
export default withCounter;