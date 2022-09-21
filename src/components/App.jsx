import { Component } from "react";
import AppEmoji from "./composition/AppEmoji";

class App extends Component{
    //eta je react er component seta ekhon amake bojhate hobe
    // tai componnet extend korsi

    render(){
        //eta prestentation option
        return (
            <div className="App">
                {/* <StateInReact/> */}
                {/* <EventHandling/> */}
                {/* <ListAndKeys/> */}
                {/* <Form/> */}
                <AppEmoji/>
            </div>
        )
    }
}

export default App;