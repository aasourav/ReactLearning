//creating custom context that will have Provider function and also 
//hae Consumer Function. After createing the blue print. then we 
//create object where we createojbect of this class and return Provider and Consumer 
//from this ojbect. finally export the fnction.
class Context{
    constructor(value){
        this.value = value
    }
    //provider
    Provider = ({value,children})=>{
        this.value = value;
        return children;
    }

    //consumer
    Consumer = ({children})=>{
        return children(this.value)
    }
}   
const createContext = (value = null)=>{
    const context = new Context(value)
    return{
        Provider: context.Provider,
        Consumer: context.Consumer
    }
}
export default createContext