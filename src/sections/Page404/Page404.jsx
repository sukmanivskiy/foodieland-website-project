import './Page404.scss'
import clsx from 'clsx'
import Button from "@/components/Button/index.js";

export default (props) => {
  const {
    className,
  } = props

  return (
    <section
      className = {clsx('page-404', className)}
    >
      <h1 className='page-404__title'>Page not found</h1>
      <p className="page-404__description h1">404</p>
      <Button
        href="/"
        className='page-404__link'
      >Home</Button>
    </section>
  )
}
