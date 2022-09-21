import Bracket from "./Bracket"
import Emoji from "./Emoji"
import Text from "./Text"
export default function AppEmoji(){
    return(
        //amra jani react one way dataflow kore
        //tahole amra ekhon emoji theke text e data
        //pathate parbo evabe wrap kore.
        <Emoji>
            {/* emoji theke value text e
            props.children akare send hoy */}

            {/* jehetu emoji props akare tar child ke
            data pataise sehetu amader sei data 
            ekta annonimous fn use kore oi data 
            recive kore korte hobe. karon fn body
            chara amra props rcv korte parbo na*/}

            
            {/* {({addEmoji}) => <Text addEmoji={addEmoji}/>} */}


            
            {/* ekhon jodi nested hoy. orthat inheritence e ekta jinis
                er multiple parent extend kore seta jodi hoy seta
                solve korbo evabe. given below -
            */}


            {({addEmoji}) =>
                <Bracket>
                    {({addBracket})=> <Text addEmoji={addEmoji} addBracket={addBracket}/>}
            </Bracket>}
        </Emoji> 
    )
}