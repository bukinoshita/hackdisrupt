'use strict'

import React, { Component } from 'react'
import Link from 'next/link'
import PropTypes from 'prop-types'
import TimeAgo from 'react-timeago'
import brazilianStrings from 'react-timeago/lib/language-strings/pt-br'
import buildFormatter from 'react-timeago/lib/formatters/buildFormatter'

import { colors, typography } from './../../theme'

import Hero from './../../components/hero'
import Row from './../../ui/row'
import Page from './../../layouts/page'

class Polls extends Component {
  static async getInitialProps() {
    try {
      const res = await fetch(`${process.env.API_URL}/polls`, {
        headers: {
          Authorization: process.env.API_TOKEN
        }
      })
      const json = await res.json()

      return { polls: json }
    } catch (err) {
      return {
        polls: { count: 0 }
      }
    }
  }

  constructor() {
    super()

    this.state = {
      polls: []
    }
  }

  componentDidMount() {
    this.setState({ polls: this.props.polls.polls })
  }

  render() {
    const formatter = buildFormatter(brazilianStrings)

    return (
      <Page>
        <Hero title="Polls" subtitle="Crie votações" />

        <Row size="600px">
          <ul>
            {this.state.polls.map(poll => {
              return (
                <li key={poll._id}>
                  <Link href={`/poll?id=${poll._id}`}>
                    <div>
                      <h2>{poll.title}</h2>
                      <span>
                        <TimeAgo date={poll.createdAt} formatter={formatter} />
                      </span>
                    </div>
                  </Link>
                </li>
              )
            })}
          </ul>
        </Row>

        <style jsx>{`
          ul {
            padding-bottom: 100px;
          }

          li {
            margin-bottom: 50px;
            color: ${colors.silver};
            transition: 0.25s;
          }

          li:hover {
            color: ${colors.black};
          }

          div {
            cursor: pointer;
          }

          h2 {
            font-size: ${typography.f20};
            font-weight: ${typography.bold};
          }

          span {
            font-size: 14px;
            margin-top: 5px;
            display: block;
          }
        `}</style>
      </Page>
    )
  }
}

Polls.propTypes = {
  polls: PropTypes.object
}

export default Polls
