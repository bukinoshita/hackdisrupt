'use strict'

import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Poll from './../../layouts/poll'
import Base from './../../layouts/base'

import api from './../../services/api'

class PollPage extends Component {
  static async getInitialProps({ query }) {
    try {
      const [{ poll }] = await Promise.all([api.get(`/poll/${query.id}`)])

      return { poll }
    } catch (err) {
      return {
        poll: {}
      }
    }
  }

  render() {
    const { poll } = this.props

    return (
      <Base>
        <Poll
          title={poll.title}
          description={poll.description}
          options={poll.options}
          owner={poll.owner}
        />
      </Base>
    )
  }
}

PollPage.propTypes = {
  poll: PropTypes.object,
  account: PropTypes.object
}

export default PollPage
