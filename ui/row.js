'use strict'

import React from 'react'
import PropTypes from 'prop-types'

const Row = ({ children, size }) => (
  <div>
    {children}

    <style jsx>{`
      div {
        max-width: ${size};
        margin-left: auto;
        margin-right: auto;
        padding-left: 24px;
        padding-right: 24px;
      }
    `}</style>
  </div>
)

Row.propTypes = {
  children: PropTypes.node,
  size: PropTypes.string
}

Row.defaultProps = {
  size: '1080px'
}

export default Row
