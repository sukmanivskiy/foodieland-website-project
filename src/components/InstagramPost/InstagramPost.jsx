import './InstagramPost.scss'
import clsx from 'clsx'
import {Image} from "minista";

export default (props) => {
  const {
    className,
    postSrc,
    postWidth,
  } = props

  return (
    <div
      className = {clsx('instagram-post', className)}
    >
      <Image
        src={postSrc}
        width={postWidth}
      />
    </div>
  )
}
