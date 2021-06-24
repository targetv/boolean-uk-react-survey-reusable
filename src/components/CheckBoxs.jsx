import AnswersItem from "./AnswersItem"
import CheckBox from "./CheckBox"



function CheckBoxs({inputNames, onChangeHandlerCheckBox, name}){



  console.log(inputNames)
    return (
    <ul>
        {inputNames.map( item => <li> <CheckBox onChangeHandlerCheckBox={onChangeHandlerCheckBox} name = {name} type = {"checkbox"} value = {item.value} >{item.text} </CheckBox></li>
  
        )}

      </ul>
      )

}

export default CheckBoxs