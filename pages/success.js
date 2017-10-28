'use strict'

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Twitter, Facebook } from 'react-feather'
import Router from 'next/router'
import Link from 'next/link'
import shareTwitter from 'share-twitter'

import Page from './../layouts/page'

import { setToken } from './../services/auth'

import Row from './../ui/row'
import Logo from './../ui/logo'
import ButtonLink from './../ui/button-link'

class Success extends Component {
  static async getInitialProps({ query }) {
    const id = query.id
    const res = await fetch(`${process.env.API_URL}/users`)
    const json = await res.json()
    const user = json.users.map(user => {
      if (user.githubId === id) {
        return user
      }

      return {
        name:
          'Esse `id` não existe, mas você pode entrar na nossa lista beta sua coisa linda!'
      }
    })[0]

    setToken(id)

    return { user }
  }

  componentDidMount() {
    const { id } = this.props.url.query

    if (!id) {
      return Router.push('/')
    }
  }

  render() {
    const text =
      'Entrei na lista do hackdisrupt! Aprenda programação com uma experiencia nova.'
    const url = 'https://hackdisrupt.now.sh'

    const { name, username } = this.props.user
    const description = username ? (
      <p>
        Obrigado por fazer parte! Estamos liberando convites aos poucos para as
        pessoas que estão na nossa lista beta.
        <style jsx>{`
          p {
            color: #000;
            font-size: 14px;
            line-height: 26px;
            font-weight: 300;
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
                href="https://www.facebook.com/dialog/share?app_id=145634995501895&display=popup&href=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2F&redirect_uri=https%3A%2F%2Fdevelopers.facebook.com%2Ftools%2Fexplorer&quote=nice"
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
            font-weight: bold;
            font-size: 16px;
            margin-top: 100px;
            line-height: 26px;
          }

          footer {
            text-align: center;
            text-transform: uppercase;
            font-weight: semibold;
            font-size: 12px;
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
