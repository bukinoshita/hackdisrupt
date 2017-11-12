'use strict'

import React, { Component } from 'react'
import Link from 'next/link'
import ButtonLink from 'hackdisrupt-ui/build/button-link'
import { Github } from 'react-feather'
import 'isomorphic-fetch' // eslint-disable-line import/no-unassigned-import

import Row from './../ui/row'
import Logo from './../ui/logo'
import { typography } from './../theme'

class Header extends Component {
  constructor() {
    super()

    this.state = { isLogged: false }
  }

  componentDidMount() {
    this.setState({ isLogged: true })
  }

  render() {
    const { isLogged } = this.state

    const logged = isLogged ? (
      <div>
        <img
          src="https://pbs.twimg.com/profile_images/917531117607112706/_FoaCpJG_400x400.jpg"
          alt=""
        />

        <span>Bu Kinoshita</span>

        <style jsx>{`
          div {
            display: flex;
            align-items: center;
          }

          img {
            width: 30px;
            height: 30px;
            border-radius: 3px;
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

export default Header
