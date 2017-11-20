'use strict'

import React, { Component } from 'react'
import Link from 'next/link'
import PropTypes from 'prop-types'
import TimeAgo from 'react-timeago'
import brazilianStrings from 'react-timeago/lib/language-strings/pt-br'
import buildFormatter from 'react-timeago/lib/formatters/buildFormatter'
import Button from './../../ui/button'

import { colors, typography } from './../../theme'

import Hero from './../../components/hero'
import Row from './../../ui/row'
import Page from './../../layouts/page'
import Base from './../../layouts/base'

import api from './../../services/api'
import { getCookie } from './../../services/cookies'

class Polls extends Component {
  static async getInitialProps() {
    try {
      const polls = await api('/polls')

      return { polls }
    } catch (err) {
      return {
        polls: { count: 0 }
      }
    }
  }

  componentDidMount() {
    const { polls } = this.props.polls

    this.setState({ polls })
  }

  constructor() {
    super()

    this.state = {
      polls: []
    }
  }

  render() {
    const formatter = buildFormatter(brazilianStrings)
    const { polls } = this.state
    const token = getCookie('hackdisrupt')

    const createNewBtn = token ? (
      <Link href="/p/new">
        <Button size="small">criar uma poll</Button>
      </Link>
    ) : (
      undefined
    )

    const list = polls ? (
      polls.map(({ _id, owner, createdAt, title, description }) => {
        return (
          <li key={_id}>
            <Link href={`/poll?id=${_id}`} as={`/poll/${_id}`}>
              <div className="item">
                <span className="item-owner">{owner.name.charAt(0)}</span>

                <div className="item-info">
                  <h2>{title}</h2>
                  <span>
                    <TimeAgo date={createdAt} formatter={formatter} />
                  </span>
                </div>

                <p className="item-description">{description}</p>
              </div>
            </Link>

            <style jsx>{`
              li {
                transition: 0.25s;
                transform: scale(1);
              }

              li:hover {
                transform: scale(1.035);
              }

              .item {
                display: flex;
                justify-content: space-between;
                align-items: center;
                width: 100%;
                cursor: pointer;
                min-height: 50px;
                padding-top: 30px;
                padding-bottom: 30px;
                border-bottom: 1px solid ${colors.glitter};
              }

              .item-owner {
                background-color: ${colors.black};
                min-width: 50px;
                height: 50px;
                border-radius: 4px;
                color: ${colors.white};
                text-align: center;
                line-height: 50px;
                font-weight: ${typography.bold};
                font-size: ${typography.f20};
                flex-basis: 5%;
              }

              .item-info {
                flex-basis: 30%;
              }

              .item-info h2 {
                color: ${colors.black};
                font-size: ${typography.f16};
                font-weight: ${typography.bold};
                line-height: 26px;
              }

              .item-info span {
                font-size: ${typography.f14};
                font-weight: ${typography.semibold};
                color: ${colors.silver};
              }

              .item-description {
                flex-basis: 40%;
                font-size: ${typography.f14};
                line-height: 26px;
                color: ${colors.silver};
              }

              .item-actions {
                flex-basis: 10%;
                text-align: right;
              }
            `}</style>
          </li>
        )
      })
    ) : (
      <h2>
        não tem nenhuma `poll` criada.
        <style jsx>{`
          h2 {
            text-align: center;
            padding-top: 100px;
            padding-bottom: 100px;
            color: ${colors.silver};
            font-size: ${typography.f16};
            font-weight: ${typography.semibold};
          }
        `}</style>
      </h2>
    )

    return (
      <Page>
        <Base>
          <Hero title="Polls" subtitle="Crie votações" />

          <Row>
            <div className="page-title">
              <h2>Lista</h2>

              {createNewBtn}
            </div>

            <ul>{list}</ul>
          </Row>

          <style jsx>{`
            .page-title {
              display: flex;
              justify-content: space-between;
              padding-bottom: 20px;
              margin-bottom: 30px;
              border-bottom: 1px solid ${colors.glitter};
              align-items: center;
            }

            .page-title h2 {
              font-size: ${typography.f16};
            }

            ul {
              padding-bottom: 100px;
            }
          `}</style>
        </Base>
      </Page>
    )
  }
}

Polls.propTypes = {
  polls: PropTypes.object,
  account: PropTypes.object
}

export default Polls
