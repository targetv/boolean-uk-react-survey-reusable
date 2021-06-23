function CheckBox({children, ...props}){
    return (
        <label
            ><input {...props} />{children}</label
          >
       
    )
}

export default CheckBox