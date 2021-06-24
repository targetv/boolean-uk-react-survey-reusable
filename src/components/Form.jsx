
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
           value:"colour",
           text: `It's
           yellow!`
         },
         {
           value:"sound",
           text: `It
           squeaks!`,
          
         },
         {
           value:"logo",
           text: `It has a
           logo!`,
           
         },
         {
           value:"size",
           text: `Its big!`,
         }]
    const worstFeatures = [ {
        value:"colour",
        text: `It's
        yellow!`,
    
      },
      {
        value:"sound",
        text: `It
        squeaks!`,
       
      },
      {
        value:"logo",
        text: `It has a
        logo!`,
       
      },
      {
        value:"size",
        text: `Its big!`,
    
      }]
    const timeSpent = [ {
        value:"swimming",
        text: `Swimming`,
    
      },
      {
        value:"bathing",
        text: `Bathing`,
       
      },
      {
        value:"chatting",
        text: `Chatting`,

      },
      {
        value:"noTime",
        text: `I don't like to spend time with it`,
   
      }]
     const rateDuck = [ {
        id:"consistency1", value:"1", text: "1" 
     },
     {
        id:"consistency2", value:"2", text: "2"  
     },
     {
        id:"consistency3", value:"3", text: "3" 
     },
     {
        id:"consistency4", value:"4", text: "4"  
     } ]

     const rateColour = [ {
        id:"colour1",  value:"1", text: "1" 
     },
     {
        id:"colour2", value:"2", text: "2"  
     },
     {
        id:"colour3", value:"3", text: "3" 
     },
     {
        id:"colour4", value:"4", text: "4"  
     } ]

     const rateLogo = [ {
        id:"logo1", value:"1", text: "1" 
     },
     {
        id:"logo2", value:"2", text: "2"  
     },
     {
        id:"logo3", value:"3", text: "3" 
     },
     {
        id:"logo4", value:"4", text: "4"  
     } ]

  
  
    return (<form class="form">
    <h2>Tell us what you think about your rubber duck!</h2>
    <div class="form__group">
      <h3>What would you say that are the best features of your rubber duck?</h3>
      {<CheckBoxs inputNames = {bestFeatures} name= {"bestFeatures"} onChangeHandlerCheckBox={onChangeHandlerCheckBox}/>}
    </div>
    <div class="form__group">
      <h3>What would you say that are the worst bits of your rubber duck?</h3>
      {<CheckBoxs inputNames = {worstFeatures}  name= {"worstFeatures"} onChangeHandlerCheckBox={onChangeHandlerCheckBox}/>}
    </div>
    <div class="form__group radio">
      <h3>How do you rate your rubber duck consistency?</h3>
      {<RadioButtons inputNames = {rateDuck} name={"consistency"}   onChangeHandlerRadio={onChangeHandlerRadio}/>}
    </div>
    <div class="form__group radio">
      <h3>How do you rate your rubber duck colour?</h3>
      {<RadioButtons inputNames = {rateColour} name={"colour"}   onChangeHandlerRadio={onChangeHandlerRadio}/>}
    </div>
    <div class="form__group radio">
      <h3>How do you rate your rubber duck logo?</h3>
      {<RadioButtons inputNames = {rateLogo}  name={"logo"} onChangeHandlerRadio={onChangeHandlerRadio}/>}
    </div>
    <div class="form__group">
      <h3>How do you like to spend time with your rubber duck</h3>
      {<CheckBoxs inputNames = {timeSpent} name= {"timeSpent"} onChangeHandlerCheckBox={onChangeHandlerCheckBox}/>}
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