
import RadioButton from "./RadioButton"

function RadioButtons({inputNames}){
   
    console.log(inputNames)

// 117413

    return(
        <ul>
            {inputNames.map(item => <li><RadioButton id={item.id} type={item.type} name={item.name} value={item.value} ></RadioButton><label for={`${item.id}`}>{item.text}</label></li> )}
        </ul>
     
    )
}
export default RadioButtons

