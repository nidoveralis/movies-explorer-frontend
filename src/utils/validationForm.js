const [isValidInput, setIsValidInput] = React.useState(false);
  const [isErrorInput, setIsErrorInput] = React.useState({});
  const [formValue,setFormValue] = React.useState({});
  
  function nameInputValue(e) {
    const input = e.target;
    setIsErrorInput({...isErrorInput, [input.name]:input.validationMessage});
    setFormValue({...formValue, [input.name]:input.value})
    setIsValidInput(e.target.closest('form').checkValidity());
   }
   
  const buttonClass = `element-form__button-submit ${isValidInput ? "" : "element-form__button-submit_error"} `

  function handleSubmit(e) {
    e.preventDefault();
    formValues(formValue)
  }