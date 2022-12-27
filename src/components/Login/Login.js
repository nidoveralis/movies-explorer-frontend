import './Login.css';
import Form from '../Form/Form';

function Login({formValues, errServer}) {
  return(
    <Form title='Рады видеть!' submitButton='Войти' linkTitle='Ещё не зарегистрированы? ' linkName='Регистрация' link='/signup' formValues={formValues} errServer={errServer}/>
  )
}
export default Login;