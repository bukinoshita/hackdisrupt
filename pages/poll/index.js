'use strict'

import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Poll from './../../layouts/poll'

import api from './../../services/api'

class PollPage extends Component {
  static async getInitialProps({ query }) {
    try {
      const [{ poll }, account] = await Promise.all([
        api.get(`/poll/${query.id}`),
        api.get('/account')
      ])

      return { poll, account }
    } catch (err) {
      return {
        poll: {}
      }
    }
  }

  render() {
    const { poll, account } = this.props

    return (
      <Poll
        title={poll.title}
        description={poll.description}
        options={poll.options}
        owner={poll.owner}
        account={account}
      />
    )
  }
}

PollPage.propTypes = {
  poll: PropTypes.object,
  account: PropTypes.object
}

export default PollPage
