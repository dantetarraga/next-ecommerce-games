import cn from 'classnames'
import style from './Discount.module.scss'

const Discount = (props) => {
  const { children, className } = props
  return (
    <span className={cn(style.labelDiscount, { [className]: className })}>
      {children}
    </span>
  )
}

export default Discount
