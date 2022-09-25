import { useState } from "react";
import Counter_useState from "./counter_useState";
import UseEffect from "./useEffect";
export default function StudentInfo(){
    const [name,setName] = useState('');
    const [id, setId] = useState('');
    const handleInput =(e) =>{
        console.log(e.target.name)
        if(e.target.name==='name'){
             const Name = e.target.value;
             setName(Name);
        } 
        else{
             const Id = e.target.value;
             setId(Id)
        }
    }
    const handleSubmit = (e) =>{
        e.preventDefault();
    }
    return(
        <div>
            <form action="" onSubmit={handleSubmit}>
                <p>Input Your Name: </p>
                <input name="name" type="text" 
                    onChange={handleInput}
                    value={name}
                />
                <p>Input Your ID:</p>
                <input name="id" type="text" 
                    onChange={handleInput}
                    value={id}
                />
                <br/>
                <br/>
                <input type="submit" value="Submit"/>
            </form>
            <Counter_useState/>
            <UseEffect/>
        </div>
    )
}