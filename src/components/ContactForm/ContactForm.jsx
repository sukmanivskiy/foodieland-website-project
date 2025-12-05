import './ContactForm.scss'
import clsx from 'clsx'
import Button from "@/components/Button/index.js";

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
          id = "enquiry" data-js-select={JSON.stringify({
          searchEnabled: false,
          itemSelectText: "",
          classNames: {
            containerOuter: ['choices','contact-form__select'],
            containerInner: ['choices__inner','contact-form__select-inner'],
            listDropdown: ['choices__list','contact-form__select-dropdown'],
            item: ['choices__item','contact-form__select-item'],
            itemSelectable: ['contact-form__select-item--selectable'],
          },
        })}
          name = "enquiry"
          required
        >
          <option
            value = "Advertising"
            selected
          >Advertising
          </option>
          <option
            className = 'contact-form__option'
            value = "General"
          >General enquiry
          </option>
          <option
            className = 'contact-form__option'
            value = "Support"
          >Support
          </option>
          <option
            className = 'contact-form__option'
            value = "Feedback"
          >Feedback
          </option>
        </select>
      </div>

      <div className = "contact-form__group--textarea">
        <label
          className = 'contact-form__label'
          htmlFor = "message"
        >Message
        </label>
        <textarea
          className = 'contact-form__textarea'
          id = "message"
          name = "message"
          rows = "5"
          required
        ></textarea>
      </div>

      <Button
        type = 'submit'
        className = "contact-form__button"
      >Submit</Button>
    </form>
  )
}
