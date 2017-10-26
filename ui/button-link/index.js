'use strict'

import classNames from 'classnames'
import styles from './style'

const ButtonLink = ({ children, type, onClick, color, size, href }) => {
  const classnames = classNames(size, color)

  return (
    <a href={href} className={classnames} type={type}>
      {children}

      <style jsx>{styles}</style>
    </a>
  )
}

ButtonLink.defaultProps = {
  onClick: null,
  size: 'normal',
  color: 'black',
  type: 'button'
}

export default ButtonLink
