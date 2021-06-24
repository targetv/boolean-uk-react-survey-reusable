import AnswersItem from "./AnswersItem"
import CheckBox from "./CheckBox"



function CheckBoxs({inputNames, onChangeHandlerCheckBox}){



  console.log(inputNames)
    return (
    <ul>
        {inputNames.map( item => <li> <CheckBox onChangeHandlerCheckBox={onChangeHandlerCheckBox} name = {item.name} type = {item.type} value = {item.value} >{item.text} </CheckBox></li>
  
        )}

      </ul>
      )

}

export default CheckBoxs