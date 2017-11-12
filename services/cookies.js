'use strict'

import cookie from 'react-cookies'

export const getCookie = key => {
  return cookie.load(key)
}

export const setCookie = value => {
  const now = new Date()
  now.setDate(now.getDate() + 14)

  return cookie.save('hackdisrupt', value, {
    expires: now,
    path: '/'
  })
}

export const logout = () => {
  return cookie.remove('hackdisrupt', { path: '/' })
}
