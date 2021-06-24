function CheckBox({children, onChangeHandlerCheckBox, ...props}){
    return (
        <label
            ><input {...props} onChange={e => onChangeHandlerCheckBox(e)} />{children}</label
          >
       
    )
}

export default CheckBox