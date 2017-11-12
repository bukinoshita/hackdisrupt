'use strict'

import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Poll from './../../layouts/poll'

import api from './../../services/api'

class PollPage extends Component {
  static async getInitialProps({ query }) {
    try {
      const { poll } = await api.get(`/poll/${query.id}`)

      return { poll }
    } catch (err) {
      return {
        poll: {}
      }
    }
  }

  render() {
    return (
      <Poll
        title={this.props.poll.title}
        description={this.props.poll.description}
        options={this.props.poll.options}
        owner={this.props.poll.owner}
      />
    )
  }
}

PollPage.propTypes = {
  poll: PropTypes.object
}

export default PollPage
