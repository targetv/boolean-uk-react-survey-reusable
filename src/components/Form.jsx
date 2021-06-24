
import CheckBoxs from './CheckBoxs'
import RadioButtons from '../components/RadioButtons'
import { useState } from 'react'

function Form(){
    const initialForm = {
        username: "",
        email: "",
        logo: "",
        colour: "",
        consistency: "",
        timeSpent: [],
        review: "",
        bestFeatures: [],
        worstFeatures: []
    }
       
      
    
         const [formValueInputs, setFormValueInputs] = useState(initialForm)


    function onChangeHandlerCheckBox(event){
        const {name, checked, value} = event.target
        
       let updateArray =  checked ? [...formValueInputs[name], value] 
        :  formValueInputs[name].filter(item => item !== value)
        
        setFormValueInputs({...formValueInputs, [name]: updateArray })
      }


    function onChangeHandlerRadio(event){
        const {name, value} = event.target
        if(value){
          setFormValueInputs({...formValueInputs, [name]: value})
        }
        
      }
     

    const bestFeatures = [
        {
           name:"bestFeatures",
           value:"colour",
           text: `It's
           yellow!`,
           type: "checkbox",
         },
         {
           name:"bestFeatures",
           value:"sound",
           text: `It
           squeaks!`,
           type: "checkbox"
         },
         {
           name:"bestFeatures",
           value:"logo",
           text: `It has a
           logo!`,
           type: "checkbox"
         },
         {
           name:"bestFeatures",
           value:"size",
           text: `Its big!`,
           type: "checkbox"
         }]
    const worstFeatures = [ {
        name:"worstFeatures",
        value:"colour",
        text: `It's
        yellow!`,
        type: "checkbox"
      },
      {
        name:"worstFeatures",
        value:"sound",
        text: `It
        squeaks!`,
        type: "checkbox"
      },
      {
        name:"worstFeatures",
        value:"logo",
        text: `It has a
        logo!`,
        type: "checkbox"
      },
      {
        name:"worstFeatures",
        value:"size",
        text: `Its big!`,
        type: "checkbox"
      }]
    const timeSpent = [ {
        name:"timeSpent",
        value:"swimming",
        text: `Swimming`,
        type: "checkbox"
      },
      {
        name:"timeSpent",
        value:"bathing",
        text: `Bathing`,
        type: "checkbox"
      },
      {
        name:"timeSpent",
        value:"chatting",
        text: `Chatting`,
        type: "checkbox"
      },
      {
        name:"timeSpent",
        value:"noTime",
        text: `I don't like to spend time with it`,
        type: "checkbox"
      }]
     const rateDuck = [ {
        id:"consistency1", type:"radio", name:"consistency", value:"1", text: "1" 
     },
     {
        id:"consistency2", type:"radio", name:"consistency", value:"2", text: "2"  
     },
     {
        id:"consistency3", type:"radio", name:"consistency", value:"3", text: "3" 
     },
     {
        id:"consistency4", type:"radio", name:"consistency", value:"4", text: "4"  
     } ]

     const rateColour = [ {
        id:"colour1", type:"radio", name:"colour", value:"1", text: "1" 
     },
     {
        id:"colour2", type:"radio", name:"colour", value:"2", text: "2"  
     },
     {
        id:"colour3", type:"radio", name:"colour", value:"3", text: "3" 
     },
     {
        id:"colour4", type:"radio", name:"colour", value:"4", text: "4"  
     } ]

     const rateLogo = [ {
        id:"logo1", type:"radio", name:"logo", value:"1", text: "1" 
     },
     {
        id:"logo2", type:"radio", name:"logo", value:"2", text: "2"  
     },
     {
        id:"logo3", type:"radio", name:"logo", value:"3", text: "3" 
     },
     {
        id:"logo4", type:"radio", name:"logo", value:"4", text: "4"  
     } ]

  
  
    return (<form class="form">
    <h2>Tell us what you think about your rubber duck!</h2>
    <div class="form__group">
      <h3>What would you say that are the best features of your rubber duck?</h3>
      {<CheckBoxs inputNames = {bestFeatures} onChangeHandlerCheckBox={onChangeHandlerCheckBox}/>}
    </div>
    <div class="form__group">
      <h3>What would you say that are the worst bits of your rubber duck?</h3>
      {<CheckBoxs inputNames = {worstFeatures} onChangeHandlerCheckBox={onChangeHandlerCheckBox}/>}
    </div>
    <div class="form__group radio">
      <h3>How do you rate your rubber duck consistency?</h3>
      {<RadioButtons inputNames = {rateDuck}  onChangeHandlerRadio={onChangeHandlerRadio}/>}
    </div>
    <div class="form__group radio">
      <h3>How do you rate your rubber duck colour?</h3>
      {<RadioButtons inputNames = {rateColour} onChangeHandlerRadio={onChangeHandlerRadio}/>}
    </div>
    <div class="form__group radio">
      <h3>How do you rate your rubber duck logo?</h3>
      {<RadioButtons inputNames = {rateLogo} onChangeHandlerRadio={onChangeHandlerRadio}/>}
    </div>
    <div class="form__group">
      <h3>How do you like to spend time with your rubber duck</h3>
      {<CheckBoxs inputNames = {timeSpent} onChangeHandlerCheckBox={onChangeHandlerCheckBox}/>}
    </div>
    <label
      >What else have you got to say about your rubber duck?<textarea
        name="review"
        cols="30"
        rows="10"
      ></textarea></label
    ><label
      >Put your name here (if you feel like it):<input
        type="text"
        name="username"
        value="" /></label
    ><label
      >Leave us your email pretty please??<input
        type="email"
        name="email"
        value="" /></label
    ><input class="form__submit" type="submit" value="Submit Survey!" />
  </form>
  )
}

export default Form