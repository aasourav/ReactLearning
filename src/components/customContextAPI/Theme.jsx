import createContext from "./Context"
//We neet to create this file because of tract the Context
//otherwise we only can create one context.
//That's why on work perpouse we create this file.
// and export this.
//Now we can use ThmeContext as a provider and consumer.
const ThemeContext = createContext({theme:'red'}) //parameter is default value. it's optional
export default ThemeContext