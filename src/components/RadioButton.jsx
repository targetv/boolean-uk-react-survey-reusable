


function RadioButton({onChangeHandlerRadio, ...props}){
    return  (
    <>
      <input onChange={e =>  onChangeHandlerRadio(e)} {...props} />
   </>  
  )
}

export default RadioButton