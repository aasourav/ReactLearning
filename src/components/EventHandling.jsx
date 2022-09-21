import React from "react";
import Button from "./subComponent/Button";
// import './profile.style.css';

class EventHandling extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            date :new Date(),
            locale : 'bn-BD'
        };
    }
    componentDidMount(){
        this.clockTimer = setInterval(()=>
            this.tick(),1000);
    }
    tick(){
        this.setState({
            date: new Date(),
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
    handleClick = (e)=>{
        e.preventDefault();
        if(this.state.locale === 'en-US'){
            this.setState({
             locale: 'bn-BD'
            })
        }
        else{
            this.setState({
                locale: 'en-US'
               })
        }
    }
    render(){
        const {locale} = this.state;
        // console.log("Clock is Called")
        //amra jodi ekhane return null kore dei kono condition er maddhome
        //tahole se ar nicher jinis ta render korbe na.
        //but er lyfecyle sob kaj korbe.
        return (
            <div>
               <h1 className="clock">
                 {this.state.date.toLocaleTimeString(locale)}
               </h1>
               <Button change={this.handleClick} />
            </div>
        )
    }
}
export default EventHandling