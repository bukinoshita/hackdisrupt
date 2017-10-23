'use strict'

import PropTypes from 'prop-types'
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

// Button.propTypes = {
//   onClick: PropTypes.func,
//   variant: PropTypes.oneOf([
//     'flat',
//     'gradient',
//     'outline',
//     'dashed',
//     'clean',
//     'block'
//   ]),
//   base: PropTypes.oneOf(['dark', 'light']),
//   color: PropTypes.oneOf([
//     'green-primary',
//     'green-secondary',
//     'green-contrast',
//     'green-accent',
//     'silver',
//     'plumb',
//     'yellow',
//     'red',
//     'blue',
//     'purple',
//     'purple-accent',
//     'pink',
//     'pink-accent'
//   ]),
//   size: PropTypes.oneOf(['micro', 'tiny', 'small', 'medium', 'large']),
//   type: PropTypes.oneOf(['button', 'submit', 'reset']),
//   children: PropTypes.oneOfType([
//     PropTypes.arrayOf(PropTypes.node),
//     PropTypes.string,
//     PropTypes.node
//   ]).isRequired,
// }

Button.defaultProps = {
  onClick: null,
  size: 'normal',
  color: 'black',
  type: 'button'
}

export default Button
