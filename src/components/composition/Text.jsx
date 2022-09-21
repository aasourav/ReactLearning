export default function Text({addEmoji, addBracket}){
    let text = `hey bro what's up`
    if(addEmoji){
        text  = addEmoji(text,'Hola')
    }
    if(addBracket){
        text = addBracket(text)
    }
    return (
        <div>
            {/* {addEmoji ? addEmoji(text,`HOLA,`) : text} */}
            {text}
        </div>
    )
}