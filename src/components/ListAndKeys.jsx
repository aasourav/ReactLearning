import StateInReact from "./StateInReact";

function ClockList({quantity=[]}){
    return(
        <div>
            {quantity.map((clock)=>(
                //amader key dite hobe jodi amra evabe
                //map diye kaj kori. bcz of detect chng
                //in react dom
                //amra just element ta dit pari or
                // Math.random() diye solve korte pari
                // ei key perticullar block like here map
                //place unique holei cholbe
                <StateInReact key={clock}/>
            ))}
        </div>
    )
}
function ListAndKeys(){
    return(
        <ClockList quantity={[1,2,3]}/>
    )
}
export default ListAndKeys;