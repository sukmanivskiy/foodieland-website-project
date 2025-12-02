import './PostHeader.scss'
import clsx from 'clsx'
import AuthorCard from "@/components/AuthorCard/index.js";
import Tag from "@/components/Tag/index.js";
import Actions from "@/components/Actions/index.js";

export default (props) => {
  const {
    className,
    linkLabel,
    description,
    author,
  } = props

  return (
    <div
      className = {clsx('post-header', className)}
    >
      <h1 className="post-header__title">{linkLabel}</h1>
      <AuthorCard
        imgSrc={author.imgSrc}
        name={author.name}
        authorDate={author.authorDate}
        isInline
      />
      <div className="post-header__body">
        <p>{description}</p>
      </div>

    </div>

  )
}
