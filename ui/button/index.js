'use strict'

import classNames from 'classnames'
import styles from './style'

const Button = ({ children, type, onClick, color, size }) => {
  const classnames = classNames(size, color)

  return (
    <button className={classnames} type={type} onClick={onClick}>
      {children}

      <style jsx>{styles}</style>
    </button>
  )
}

Button.defaultProps = {
  onClick: null,
  size: 'normal',
  color: 'black',
  type: 'button'
}

export default Button
