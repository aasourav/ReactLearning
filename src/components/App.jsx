import { Component } from "react";
import StudentInfo from "./hook/intro";
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
                {/* <AppEmoji/> */}
                {/* <ClickCounter/> */}
                {/* <HoverCounter/> */}
                {/* <RenderProps/> */}
                {/* <AppContext/> */}
                {/* <ParentComponent/> */}
                <StudentInfo/>
            </div>
        )
    }
}

export default App;