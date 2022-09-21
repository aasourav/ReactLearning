import React from "react";
// import './profile.style.css';

class StateInReact extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            date :new Date(),
            incr : 10
        };
    }
    componentDidMount(){
        this.clockTimer = setInterval(()=>
            this.tick(),1000);
    }
    tick(){
        this.setState({
            date: new Date(),
            incr : this.state.incr + .5
        });

        //when we need previous state to update
        //current state we must need update state
        //like below
        // this.setState((prev_state,props)=>({
        //     // incr : prev_state + 1
        //     date : new Date(),
        //     incr : prev_state.incr + .5
        // }))
    }
    componentWillUnmount(){
        // clearInterval(this.clockTimer);
    }
    render(){
        return (
            <div>
               <span className="clock">
                 {this.state.date.toLocaleTimeString()}
               </span>
               <h1>{this.state.incr}</h1>
            </div>
        )
    }
}
export default StateInReact