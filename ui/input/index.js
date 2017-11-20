'use strict'

import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'

import styles from './style'

const Input = ({
  name,
  label,
  multiline,
  type,
  placeholder,
  success,
  error,
  hint,
  size,
  value,
  onChange
}) => {
  const classnames = classNames(size)

  return (
    <div>
      <label htmlFor={name}>{label}</label>

      {multiline ? (
        <textarea
          name={name}
          id={name}
          className={classnames}
          rows="1"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      ) : (
        <input
          name={name}
          id={name}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      )}

      {(hint || error || success) && <p>{success || error || hint}</p>}

      <style jsx>{styles}</style>
    </div>
  )
}

Input.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  multiline: PropTypes.bool,
  type: PropTypes.oneOf(['text', 'email']),
  placeholder: PropTypes.string,
  hint: PropTypes.string,
  disabled: PropTypes.bool,
  error: PropTypes.string,
  success: PropTypes.string,
  icon: PropTypes.element,
  size: PropTypes.oneOf(['normal', 'large', 'medium'])
}

Input.defaultProps = {
  type: 'text',
  placeholder: '',
  disabled: false,
  hint: '',
  error: '',
  success: '',
  multiline: false,
  icon: null,
  value: '',
  autoFocus: false,
  size: 'normal'
}

export default Input
