'use strict'

import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'

import styles from './style'

const ButtonLink = ({ children, type, color, size, href, block }) => {
  const classnames = classNames(size, color, { block })

  return (
    <a href={href} className={classnames} type={type}>
      {children}

      <style jsx>{styles}</style>
    </a>
  )
}

ButtonLink.defaultProps = {
  size: 'normal',
  color: 'black',
  type: 'button',
  block: false
}

ButtonLink.propTypes = {
  children: PropTypes.node,
  type: PropTypes.string,
  block: PropTypes.bool,
  color: PropTypes.string,
  size: PropTypes.string,
  href: PropTypes.string
}

export default ButtonLink
