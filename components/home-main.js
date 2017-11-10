'use strict'

import React from 'react'
import { Github } from 'react-feather'
import PropTypes from 'prop-types'
import ButtonLink from 'hackdisrupt-ui/build/button-link'
import Link from 'next/link'

import { colors, typography, phone } from './../theme'
import Row from './../ui/row'
import Header from './../components/header'

const HomeMain = ({ count = 0, logged = false }) => {
  const message = logged ? (
    <p>
      > Você já está na lista. Obrigado por fazer parte! Acompanhe a gente no{' '}
      <a href="https://github.com/bukinoshita/hackdisrupt">Github</a>.
      <style jsx>{`
        p {
          max-width: 400px;
          line-height: 24px;
          font-size: ${typography.f14};
          font-style: italic;
          font-weight: ${typography.medium};
          text-transform: lowercase;
          color: ${colors.black};
        }

        a {
          color: ${colors.black};
          font-weight: ${typography.semibold};
          text-decoration: underline;
        }
      `}</style>
    </p>
  ) : (
    <ButtonLink href={`${process.env.API_URL}/auth/github`}>
      <Github style={{ marginRight: '10px' }} size="16" />
      Entrar na lista beta
    </ButtonLink>
  )

  return (
    <Row>
      <Header />

      <div className="hero">
        <div className="hero-content">
          <h1>
            <strong>aprenda</strong>programação
          </h1>
          <h2>
            mais de <span className="number">{count}</span> programadores
            prontos para aprender.
          </h2>
          <p>aprender / ensinar / forum / trampos / podcasts</p>

          {message}

          <Link prefetch href="/polls">
            polls
          </Link>
        </div>
      </div>

      <style jsx>{`
        .hero {
          display: flex;
          align-items: center;
          height: calc(100vh - 200px);
        }

        h1 {
          font-size: 60px;
          font-weight: 200;
        }

        strong {
          font-weight: ${typography.heavy};
          display: block;
        }

        .number {
          font-weight: ${typography.semibold};
        }

        h2 {
          margin-top: 30px;
          color: #c0c0c0;
          font-weight: ${typography.regular};
          font-size: ${typography.f18};
        }

        p {
          color: #c0c0c0;
          font-weight: ${typography.regular};
          font-size: ${typography.f18};
          margin-top: 10px;
          margin-bottom: 50px;
        }

        li {
          display: inline-block;
          margin-right: 20px;
        }

        .footer__link {
          font-weight: ${typography.medium};
          text-transform: lowercase;
          color: ${colors.black};
          cursor: pointer;
          font-size: ${typography.f14};
          opacity: 0.5;
        }

        .footer__link:hover {
          text-decoration: underline;
          opacity: 1;
          transition: 0.15s;
        }

        @media ${phone} {
          h1 {
            font-size: 40px;
          }

          h2,
          p {
            font-size: ${typography.f14};
            line-height: 20px;
          }
        }
      `}</style>
    </Row>
  )
}

HomeMain.propTypes = {
  count: PropTypes.number,
  logged: PropTypes.bool
}

export default HomeMain
