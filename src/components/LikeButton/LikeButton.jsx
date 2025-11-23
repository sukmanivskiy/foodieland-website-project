import './LikeButton.scss'
import clsx from 'clsx'
import Button from "@/components/Button/index.js";
import MyIcon from "@/components/MyIcon/index.js";

export default (props) => {
  const {
    className,
  } = props

  return (
    <Button
      className = {clsx('like-button', className)}
    >
      <MyIcon name='like' hasFill/>
    </Button>
  )
}
