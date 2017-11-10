'use strict'

import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Poll from './../../layouts/poll'

class PollPage extends Component {
  static async getInitialProps({ query }) {
    try {
      const res = await fetch(`${process.env.API_URL}/poll/${query.id}`, {
        headers: {
          Authorization: process.env.API_TOKEN
        }
      })
      const { poll } = await res.json()

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
      />
    )
  }
}

PollPage.propTypes = {
  poll: PropTypes.object
}

export default PollPage
