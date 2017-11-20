'use strict'

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Twitter, Facebook } from 'react-feather'
import Router from 'next/router'
import Link from 'next/link'
import shareTwitter from 'share-twitter'
import shareFacebook from 'share-facebook'

import Page from './../layouts/page'

import ButtonLink from './../ui/button-link'
import Row from './../ui/row'
import Logo from './../ui/logo'

import { typography, colors } from './../theme'

import api from './../services/api'
import { setCookie } from './../services/cookies'

class Success extends Component {
  constructor() {
    super()

    this.state = { user: {} }
  }

  componentDidMount() {
    const { token } = this.props.url.query

    if (token) {
      setCookie(token)

      return api.get('/account').then(({ user }) => this.setState({ user }))
    }

    return Router.push('/')
  }

  render() {
    const text =
      'Entrei na lista do hackdisrupt! Aprenda programação com uma experiencia nova.'
    const url = 'https://hackdisrupt.now.sh'
    const { name, username } = this.state.user
    const description = username ? (
      <p>
        Obrigado por fazer parte! Estamos liberando convites aos poucos para as
        pessoas que estão na nossa lista beta.
        <style jsx>{`
          p {
            color: ${colors.black};
            font-size: ${typography.f14};
            line-height: 26px;
            font-weight: ${typography.light};
            margin-top: 10px;
            text-transform: lowercase;
          }
        `}</style>
      </p>
    ) : (
      undefined
    )

    return (
      <Page>
        <Row>
          <header>
            <div className="title">
              <Link href="/">
                <span className="logo">
                  <Logo size="200px" />
                </span>
              </Link>
              <h1>{name}</h1>
              {description}
            </div>
          </header>

          <footer>
            <h4>Compartilhe</h4>

            <div className="actions">
              <ButtonLink
                href={shareTwitter({ text, url })}
                color="twitter"
                size="small"
              >
                <Twitter size="10px" />
                <span>Twitter</span>
              </ButtonLink>

              <ButtonLink
                href={shareFacebook({
                  href: url,
                  redirect_uri: url, // eslint-disable-line camelcase
                  app_id: '1300099820094576' // eslint-disable-line camelcase
                })}
                color="facebook"
                size="small"
              >
                <Facebook size="10px" />
                <span>Facebook</span>
              </ButtonLink>
            </div>
          </footer>
        </Row>

        <style jsx>{`
          header {
            height: 400px;
            display: flex;
            justify-content: center;
            align-items: center;
          }

          .title {
            margin-left: auto;
            margin-right: auto;
            text-align: center;
            max-width: 500px;
          }

          .logo {
            cursor: pointer;
            margin-left: 0;
          }

          h1 {
            text-align: center;
            text-transform: uppercase;
            font-weight: ${typography.bold};
            font-size: ${typography.f16};
            margin-top: 100px;
            line-height: 26px;
          }

          footer {
            text-align: center;
            text-transform: uppercase;
            font-weight: ${typography.semibold};
            font-size: ${typography.f12};
          }

          span {
            margin-left: 5px;
          }

          .actions {
            display: flex;
            justify-content: space-between;
            max-width: 210px;
            margin-left: auto;
            margin-right: auto;
            margin-top: 20px;
          }
        `}</style>
      </Page>
    )
  }
}

Success.propTypes = {
  user: PropTypes.object,
  url: PropTypes.object
}

export default Success
