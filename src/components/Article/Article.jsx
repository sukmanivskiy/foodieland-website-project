import './article.scss'
import clsx from 'clsx'
import MyIcon from "@/components/MyIcon/index.js";
import {Image} from "minista";

export default (props) => {
  const {
    className, ingredients, article, isCheck,
  } = props

  return (
    <article
    className = {clsx('article', className)}
  >
    {ingredients && (
      <>
        <h2 className = "article__title h3">{ingredients.title}</h2>
        <fieldset className = 'article__field'>
          {ingredients.lists.map(({title, details}) => (<>
            <legend className = "article__list-title h4">{title}</legend>
            <ul className = "article__list">
              {details.map((detail) => (<li className = "article__item">
                <label className = "article__label">
                  <input
                    className = 'article__checkbox'
                    type = "checkbox"
                    hidden
                  />
                  <span
                    aria-hidden = "true"
                    className = 'article__custom-checkbox'
                  >
                      <MyIcon
                        className = 'article__custom-checkbox-tick'
                        name = 'tick'
                      />
                    </span>
                  <span
                    aria-hidden = 'true'
                    className = 'article__details'
                  >{detail}</span>
                </label>
              </li>))}
            </ul>
          </>))}
        </fieldset>
      </>
      )}

    {article && isCheck && (
      <fieldset className ='article__field '>
        <legend className = "article__title h3">{article.title}</legend>
        <ol className = "article__list--ordered">
          {article.paragraphs.map((detail, index) => (<li
            key = {index}
            className = "article__item article__item--content"
          >
            <label className = "article__label article__label--content ">
              <input
                className = 'article__checkbox'
                type = "checkbox"
                hidden
              />
              <span className = "article__custom-checkbox article__custom-checkbox--content">
                <MyIcon
                  className = 'article__custom-checkbox-tick'
                  name = "tick"
                />
              </span>
              <div className = "article__content">
                {detail.imgSrc ? (
                  <>
                    <h2 className = "article__content-title h4">{detail.title}</h2>
                    <div className="article__image-container">
                      <Image
                        className = "article__image"
                        width={400}
                        height={200}
                        src = {detail.imgSrc}
                        alt = {detail.title || 'Image'}
                      />
                    </div>
                  </>
                ) : (
                  <h2 className = "article__content-title h4">{detail.title}</h2>)}
                  <p className = "article__content-description">{detail.description}</p>
              </div>
            </label>
          </li>))}
        </ol>
      </fieldset>)}

    {article && !isCheck &&(
      <section className = "article--blog ">
          {article.paragraphs.map((detail, index) => (
              <div className = "article--blog__body">
                {detail.title && <h2 className = "article--blog__title h4">{detail.title}</h2>}
                {detail.imgSrc && (
                  <>
                    <Image
                      className = "article__image"
                      width={400}
                      height={200}
                      src = {detail.imgSrc}
                      alt = {detail.title || 'Image'}
                    />
                  </>
                )}
                {detail.description && <p className = "article--blog__description">{detail.description}</p>}
                {detail.cite && <blockquote className='article--blog__cite h3'>{detail.cite}</blockquote>}
              </div>
          ))}
      </section>)}
    </article>)}

