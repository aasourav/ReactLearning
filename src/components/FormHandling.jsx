import React from "react";
export default class Form extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            value:'',
            text_area_val : '',
            select : 'react',
            isAdmin: true
        }
    }
    handleChange = (e)=>{
        // console.log(e.target.type)
        // this.setState({
        //     [e.target.name]: e.target.value;
        // })
        if(e.target.type === 'select-one'){
            this.setState({
                select: e.target.value
            })
        }
        else if(e.target.type === 'checkbox'){
            this.setState({
               isAdmin: e.target.checked
            })
        }
        else{
            this.setState({
                text_val:e.target.value,
                text_area_val : e.target.value
            })
        }
        
        
    }
    handleSubmit = (e)=>{
        e.preventDefault();
    }
    render(){
        return(
            <div>
                <form action="" onSubmit={this.handleSubmit}>
                    <input 
                        type="text" 
                        placeholder="Enter Your Name"
                        value={this.state.value}
                        onChange={this.handleChange}
                    />
                    <br/>
                    <br/>
                    <textarea value={this.state.value} name="" id="" cols="30" rows="10"
                    onChange={this.handleChange}
                    ></textarea>
                    <br/>
                    <br/>
                    <select onChange={this.handleChange} name="option" value={this.state.select}>
                        <option value="react">React</option>
                        <option value="angular">Angular</option>
                    </select>
                    <br/>
                    <br/>
                    <input onChange={this.handleChange} checked={this.state.isAdmin} type="checkbox" name="" id="" />
                    <br/>
                    <br/>
                    <input type="submit" value="Submit" />
                </form>
                <p>{this.state.isAdmin}</p>
            </div>
        )
    }
}