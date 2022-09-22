import ClickCounter from "./ClickCounter";
import CommonCounter from "./CommonCounter";
import HoverCounter from "./HoverCounter";
function RenderProps(){
    return(
        <div>
            <CommonCounter render={(count,increment)=> <ClickCounter count={count} increment={increment}/>}/>
            <CommonCounter render={(count,increment)=> <HoverCounter count={count} increment={increment}/>}/>

            {/* OR */}
            {/* Amra evabeo kaj korte pari uporar moto na kre
                sejonnot code ta onk understandable hoy. Sekhetre 
                amader counter e render er jaygay hobe props.children
            */}
            {/* <CommonCounter>
                 {(count,increment)=> <ClickCounter count={count} increment={increment}/>}
            </CommonCounter> */}
           
        </div>
    )
    
}
export default RenderProps