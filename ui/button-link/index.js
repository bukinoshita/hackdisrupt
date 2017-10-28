'use strict'

import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'

import styles from './style'

const ButtonLink = ({ children, type, color, size, href }) => {
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

ButtonLink.propTypes = {
  children: PropTypes.node,
  type: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.string,
  href: PropTypes.string
}

export default ButtonLink
