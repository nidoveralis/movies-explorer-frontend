import './Form.css'

function Form(props) {
  return(
      <section className='element'>
        <h2 className='element__title'>{props.title}</h2>
        <form className='element-form'>
          {props.children}
          <fieldset className='element-form__fieldset'>
            <p className='element-form__subtitle'>E-mail</p>
            <input className='element-form__input' type='text' value='pochta@yandex.ru'/>
            <span className='element-form__span-error'></span>
          </fieldset>
          <fieldset className='element-form__fieldset'>
            <p className='element-form__subtitle'>Пароль</p>
            <input className='element-form__input element-form__input_error' type='password' />
            <span className='element-form__span-error'>Что-то пошло не так...</span>
          </fieldset>
          <div className='element-form__buttons'>
            <input type='submit' value={props.submitButton} className='element-form__button-submit' />
            <p className='element-form__title'>{props.linkTitle}<a className='element-form__link' href='/#'>{props.link}</a></p>
          </div>
        </form>

      </section>
  )
}

export default Form;