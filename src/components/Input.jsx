export const Input = ({
    field,
    label,
    value,
    onChangeHandler,
    type,
    showErrorMessage,
    validationMessage,
    onBlurHandler,
    textArea
}) => {

    const handleValueChange = (event)=>{
        onChangeHandler(event.target.value, field) // Detectar el cambio a traves de event, se llega al value
    }

    const handleInputBlur = (event)=>{
        onBlurHandler(event.target.value, field)
    }


  return (
    <>
      <div className="auth-form-label">
        <span>{label}</span>
      </div>

      <div>
        {
            textArea ? ( 
                <textArea
                    type={type}
                    value={value}
                    onChange={handleValueChange}
                    onBlur={handleInputBlur}
                    rows={5}
                    style={{maxWidth: '400px'}}
                />
             ) : (
                <input
                    type={type}
                    value={value}
                    onChange={handleValueChange}
                    onBlur={handleInputBlur}
                />
             )
        }

        <span className="auth-form-validation-message">
            {showErrorMessage && validationMessage}
        </span>
      </div>
    </>
  )
}

