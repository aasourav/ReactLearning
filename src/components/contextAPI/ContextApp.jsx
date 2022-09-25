import React from "react";
import ConsumerComponent from "./ConsumerComponent";
import ThemeContext from "./ThemeContext";
export default class ContextApp extends React.Component{
    render(){
        console.log(this.context)
        //jehetu ContextApp.contextType = ThemeContext likhsi tai
        //amra ektaek destructure kore value alada kore felbo.
        
        //functional component er jonno amader ekta hook
        //use korte hobe.
        //fist amader import {useContext} from 'react
        // then const context = useContext(ThemeContext)
        //bakita class component er moto. 
         
        const {theme,color} = this.context;
        return(
            <div>
               {/* <ThemeContext.Consumer> */}
                    {/* {({theme,color})=>(<ConsumerComponent theme={theme} color={color} />)} */}
                    {/* tahole new component show method hobe ----  given below*/}
                    <ConsumerComponent theme={theme} color={color}/>
               {/* </ThemeContext.Consumer> */}
            </div>
        )
    }
    
}
//eta arekdhoroner value pabar way.
//amader ete sobar sese define kore dite hobe
// tahole amra Context er value redner fn er baire thekeo
//access korte parbo.
//agesudhu component er viotre access kora jeto.
ContextApp.contextType = ThemeContext

//note:
    //context api er kono functin likhle seta state er
    //viotre rakhte hobe. karon jokhon state er value 
    //change hoy tokhon context er provider er viotre
    //je data object akare diyechi seta unchanged thakleo
    //reRender hobe. bacz tokhon obj er ref change hoye 
    //jabe so react sei component take re render korbe.
    //Solution is : amader value gula include funtion
    //sob state e rakhte hobe. cz react state ke always
    //rembember kore. ar jodi value gulake rakhi state e
    // tahole se change hole then render korbe ar na hole
    // se korbe na.
    