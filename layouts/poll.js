'use strict'

import Link from 'next/link'

import Page from './page'
import Row from './../ui/row'
import Logo from './../ui/logo'
import { phone } from './../theme'

const Poll = ({ title, description, options }) => {
  const choices = options.map(({ vote, result, alt }) => {
    return (
      <li key={alt}>
        <a href={vote}>
          <img src={result} alt={alt} />
        </a>

        <style jsx>{`
          li {
            flex-basis: 48%;
            margin-bottom: 30px;
            border: 1px solid #eaeaea;
            transition: 0.2s;
          }

          li:hover {
            border: 1px solid #ccc;
          }

          a {
            display: block;
            padding: 15px 10px 10px;
          }

          img {
            max-width: 100%;
          }

          @media ${phone} {
            li {
              flex-basis: 100%;
            }

            img {
              width: 100%;
            }
          }
        `}</style>
      </li>
    )
  })

  return (
    <Page>
      <Row>
        <header>
          <div className="title">
            <Link href="/">
              <span>
                <Logo size="200px" />
              </span>
            </Link>

            <h2>{title}</h2>
            <p>{description}</p>
          </div>
        </header>

        <section>
          <ul>{choices}</ul>
        </section>

        <footer>
          <p>
            powered by{' '}
            <a className="link" href="https://github.com/apex/gh-polls">
              apex/gh-polls
            </a>.
          </p>
        </footer>
      </Row>

      <style jsx>{`
        span {
          cursor: pointer;
        }

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

        h2 {
          text-align: center;
          text-transform: uppercase;
          font-weight: bold;
          font-size: 16px;
          margin-top: 100px;
        }

        p {
          color: #000;
          font-size: 14px;
          font-weight: 300;
          margin-top: 10px;
          text-transform: lowercase;
        }

        ul {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
        }

        footer {
          padding-top: 50px;
          padding-bottom: 50px;
          text-align: center;
        }

        footer p {
          font-weight: 400;
        }

        a {
          padding: 0;
          display: inline-block;
          color: #777;
          font-weight: 500;
        }

        a:hover {
          text-decoration: underline;
          color: #000;
        }
      `}</style>
    </Page>
  )
}

export default Poll
