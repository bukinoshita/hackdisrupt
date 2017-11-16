'use strict'

import React, { Component } from 'react'
import Link from 'next/link'
import ButtonLink from 'hackdisrupt-ui/build/button-link'
import { Github } from 'react-feather'
import PropTypes from 'prop-types'

import Row from './../ui/row'
import Logo from './../ui/logo'

import { typography } from './../theme'

class Header extends Component {
  constructor() {
    super()

    this.state = { isLogged: false }
  }

  componentDidMount() {
    const { account } = this.props

    if (account.name) {
      return this.setState({ isLogged: true })
    }

    this.setState({ isLogged: false })
  }

  render() {
    const { isLogged } = this.state
    const { account } = this.props

    const logged = isLogged ? (
      <div>
        <img src={account.avatar} alt={account.name} />

        <span>{account.name}</span>

        <style jsx>{`
          div {
            display: flex;
            align-items: center;
          }

          img {
            width: 30px;
            height: 30px;
            border-radius: 4px;
          }

          span {
            font-size: ${typography.f12};
            font-weight: ${typography.semibold};
            margin-left: 10px;
          }
        `}</style>
      </div>
    ) : (
      <ButtonLink size="small" href={`${process.env.API_URL}/auth/github`}>
        <Github style={{ marginRight: '10px' }} size="16" />
        Entrar com GitHub
      </ButtonLink>
    )

    return (
      <header>
        <Row>
          <div>
            <Link href="/">
              <span>
                <Logo size="130px" />
              </span>
            </Link>

            {logged}
          </div>
        </Row>

        <style jsx>{`
          div {
            display: flex;
            justify-content: space-between;
            height: 100px;
            line-height: 100px;
            align-items: center;
          }

          span {
            cursor: pointer;
          }
        `}</style>
      </header>
    )
  }
}

Header.propTypes = {
  account: PropTypes.object
}

export default Header
