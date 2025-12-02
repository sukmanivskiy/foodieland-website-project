import './ContactForm.scss'
import clsx from 'clsx'

export default (props) => {
  const {
    className,
  } = props

  return (
    <form
      action = "/submit"
      method = "post"
      className = "contact-form"
    >
      <div className = "contact-form__group">
        <label
          className = 'contact-form__label'
          htmlFor = "name"
        >Name
        </label>
        <input
          className = 'contact-form__input'
          type = "text"
          id = "name"
          name = "name"
          required
        />
      </div>

      <div className = "contact-form__group">
        <label
          className = 'contact-form__label'
          htmlFor = "email"
        >Email
        </label>
        <input
          className = 'contact-form__input'
          type = "email"
          id = "email"
          name = "email"
          required
        />
      </div>

      <div className = "contact-form__group">
        <label
          className = 'contact-form__label'
          htmlFor = "subject"
        >Subject
        </label>
        <input
          className = 'contact-form__input'
          type = "text"
          id = "subject"
          name = "subject"
          required
        />
      </div>

      <div className = "contact-form__group">
        <label
          className = 'contact-form__label'
          htmlFor = "enquiry"
        >Enquiry type
        </label>
        <select
          className = 'contact-form__select'
          id = "enquiry"
          name = "enquiry"
          required
        >
          <option
            value = "Advertising"
            selected
          >Select type
          </option>
          <option value = "General">General enquiry</option>
          <option value = "Support">Support</option>
          <option value = "Feedback">Feedback</option>
        </select>
      </div>

      <div className = "contact-form__group">
        <label
          className = 'contact-form__label'
          htmlFor = "message"
        >Message
        </label>
        <textarea
          className='contact-form__textarea'
          id = "message"
          name = "message"
          rows = "5"
          required
        ></textarea>
      </div>

      <button type = "submit">Send message</button>
    </form>
  )
}
