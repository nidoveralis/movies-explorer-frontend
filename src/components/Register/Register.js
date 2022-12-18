import './Register.css';
import Form from '../Form/Form';

function Register() {

  const childrenName = <fieldset className='element-form__fieldset'>
                        <p className='element-form__subtitle'>Имя</p>
                        <input className='element-form__input' type='text'/>
                        <span className='element-form__span-error'></span>
                      </fieldset>

  return (
    <>
      <Form children={childrenName} title='Добро пожаловать!' submitButton='Зарегистрироваться' linkTitle='Уже зарегистрированы? ' link='Войти'/>

    </>
  )

}

export default Register;