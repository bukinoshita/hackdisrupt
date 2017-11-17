'use strict'

import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Header from './../components/header'

import api from './../services/api'
import { getCookie } from './../services/cookies'

class Base extends Component {
  constructor() {
    super()
    this.state = {
      account: {},
      fetched: false
    }
  }

  componentDidMount() {
    const token = getCookie('hackdisrupt')

    if (token) {
      return api.get('/account').then(({ user }) => {
        this.setState({
          account: user,
          fetched: true
        })
      })
    }

    this.setState({
      fetched: true
    })
  }

  render() {
    const { children } = this.props
    const { account, fetched } = this.state

    const header = fetched ? (
      <div>
        <Header account={account} />

        {children}
      </div>
    ) : null

    return <section>{header}</section>
  }
}

Base.propTypes = {
  children: PropTypes.node
}

export default Base
