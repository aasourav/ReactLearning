import withCounter from "./withCounter"
const HoverCounter = (props)=>{
    const { count , increment} = props
    return(
        <div>
            <h4 onMouseOver={increment}>Hovered {count} times</h4>
        </div>
    )
}

export default withCounter(HoverCounter)