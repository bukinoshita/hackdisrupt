'use strict'

import React, { Component } from 'react'
import Link from 'next/link'
import ButtonLink from 'hackdisrupt-ui/build/button-link'
import { Github, Menu } from 'react-feather'
import PropTypes from 'prop-types'
import ClickOutside from 'react-click-outside'
import classnames from 'classnames'

import Row from './../ui/row'
import Logo from './../ui/logo'

import { colors, typography, phone } from './../theme'

class Header extends Component {
  constructor() {
    super()

    this.handleClickOutside = this.handleClickOutside.bind(this)
    this.handleOpenMenu = this.handleOpenMenu.bind(this)

    this.state = { isLogged: false, isOpen: false }
  }

  componentDidMount() {
    const { account } = this.props

    if (account.name) {
      return this.setState({ isLogged: true })
    }

    this.setState({ isLogged: false })
  }

  handleClickOutside() {
    this.setState({ isOpen: false })
  }

  handleOpenMenu() {
    this.setState({ isOpen: true })
  }

  render() {
    const { isLogged, isOpen } = this.state
    const { account } = this.props
    const mobileMenuClass = classnames({
      'is-open': isOpen,
      fade: true
    })

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
      <ButtonLink
        size={isOpen ? 'large block' : 'small'}
        href={`${process.env.API_URL}/auth/github`}
      >
        <Github style={{ marginRight: '10px' }} size="16" />
        Entrar com GitHub
      </ButtonLink>
    )

    return (
      <header>
        <Row>
          <div>
            <nav>
              <Link prefetch href="/">
                <span>
                  <Logo size="130px" />
                </span>
              </Link>

              <ul>
                <li>
                  <Link prefetch href="/polls">
                    <span>polls</span>
                  </Link>
                </li>
              </ul>
            </nav>

            {logged}
          </div>

          <div className="mobile-menu">
            <Link prefetch href="/">
              <span>
                <Logo size="130px" />
              </span>
            </Link>

            <nav className="nav-mobile">
              <span onClick={this.handleOpenMenu}>
                <Menu />
              </span>

              <div className={mobileMenuClass}>
                <ClickOutside onClickOutside={this.handleClickOutside}>
                  <ul>
                    <li>
                      <Link prefetch href="/polls">
                        <span>polls</span>
                      </Link>
                    </li>

                    <li>{logged}</li>
                  </ul>
                </ClickOutside>
              </div>
            </nav>
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

          nav {
            display: flex;
          }

          ul {
            margin-left: 50px;
          }

          li span {
            color: ${colors.black};
            font-size: ${typography.f14};
            font-weight: ${typography.semibold};
            position: relative;
          }

          li span:after {
            content: '';
            height: 1px;
            background: ${colors.black};
            position: absolute;
            pointer-events: none;
            bottom: -5px;
            left: 0;
            right: 0;
            opacity: 0;
            transform: scale(0, 1);
            transition: all 200ms;
          }

          li:hover span:after {
            opacity: 1;
            transform: scale(1, 1);
          }

          span {
            cursor: pointer;
          }

          .mobile-menu {
            display: none;
          }

          .fade {
            background-color: rgba(0, 0, 0, 0.75);
            position: fixed;
            bottom: 0;
            left: 0;
            right: 0;
            top: 0;
            height: 100%;
            width: 100%;
            z-index: 2;
            display: none;
          }

          .fade ul {
            position: absolute;
            bottom: 0;
            width: 100%;
            z-index: 3;
            background-color: ${colors.white};
            margin-left: 0;
            padding: 25px;
            box-shadow: 0 -2px 20px rgba(0, 0, 0, 0.1);
          }

          .fade li {
            text-align: center;
            width: 100%;
          }

          .fade span {
            display: block;
          }

          .is-open {
            display: block;
          }

          @media ${phone} {
            div {
              display: none;
            }

            .mobile-menu {
              display: flex;
            }
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
