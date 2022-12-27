import './Register.css';
import Form from '../Form/Form';

function Register({formValues, errServer}) {

  return (
    <>
      <Form title='Добро пожаловать!' submitButton='Зарегистрироваться' linkTitle='Уже зарегистрированы? ' linkName='Войти' link='/signin' formValues={formValues} errServer={errServer}/>
    </>
  )

}

export default Register;