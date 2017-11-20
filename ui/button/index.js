'use strict'

import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'

import styles from './style'

const Button = ({ children, type, onClick, color, size, block }) => {
  const classnames = classNames(size, color, { block })

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
  type: 'button',
  block: false
}

Button.propTypes = {
  children: PropTypes.node,
  type: PropTypes.string,
  block: PropTypes.bool,
  onClick: PropTypes.func,
  color: PropTypes.string,
  size: PropTypes.string
}

export default Button
