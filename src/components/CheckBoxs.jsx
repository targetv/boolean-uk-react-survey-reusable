import AnswersItem from "./AnswersItem"
import CheckBox from "./CheckBox"



function CheckBoxs({inputNames}){



  console.log(inputNames)
    return (
    <ul>
        {inputNames.map( item => <li> <CheckBox name = {item.name} type = {item.type} value = {item.value}>{item.text} </CheckBox></li>
  
        )}

      </ul>
      )

}

export default CheckBoxs