import './Login.css';
import Form from '../Form/Form';

function Login() {
  return(
    <Form title='Рады видеть!' submitButton='Войти' linkTitle='Ещё не зарегистрированы? ' link='Регистрация'/>
  )
}
export default Login;