'use strict'

import Link from 'next/link'
import { Github } from 'react-feather'

import { phone } from './../theme'
import Row from './../ui/row'
import ButtonLink from './../ui/button-link'
import Header from './../components/header'

const HomeMain = () => {
  return (
    <Row>
      <Header />

      <div className="hero">
        <div className="hero-content">
          <h1>
            <strong>aprenda</strong>programação
          </h1>
          <h2>
            mais de <span className="number">4618</span> programadores prontos
            para aprender.
          </h2>
          <p>aprenda / ensine / forum / trampos / podcasts</p>

          <ButtonLink href="http://localhost:3001/auth/github">
            <Github style={{ marginRight: '10px' }} size="16" />
            Entrar na lista beta
          </ButtonLink>
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
          font-weight: 800;
          display: block;
        }

        .number {
          font-weight: 600;
        }

        h2 {
          margin-top: 30px;
          color: #c0c0c0;
          font-weight: 400;
          font-size: 18px;
        }

        p {
          color: #c0c0c0;
          font-weight: 400;
          font-size: 18px;
          margin-top: 10px;
          margin-bottom: 50px;
        }

        li {
          display: inline-block;
          margin-right: 20px;
        }

        .footer__link {
          font-weight: 500;
          text-transform: lowercase;
          color: #000;
          cursor: pointer;
          font-size: 14px;
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
            font-size: 14px;
            line-height: 20px;
          }
        }
      `}</style>
    </Row>
  )
}

export default HomeMain
