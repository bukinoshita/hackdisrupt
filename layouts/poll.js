'use strict'

import React from 'react'
import PropTypes from 'prop-types'

import Page from './page'

import Row from './../ui/row'

import Hero from './../components/hero'

import { colors, typography, phone } from './../theme'

const Poll = ({ title, description, options = [], owner }) => {
  const choices =
    options.length > 0
      ? options.map(({ vote, image, text }) => {
          return (
            <li key={text}>
              <a href={vote}>
                <img src={image} alt={text} />
              </a>

              <style jsx>{`
                li {
                  flex-basis: 48%;
                  margin-bottom: 30px;
                  border: 1px solid ${colors.glitter};
                  transition: 0.2s;
                }

                li:hover {
                  border: 1px solid ${colors.gainsboro};
                }

                a {
                  display: block;
                  padding: 10px 5px 5px;
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
      : null

  return (
    <Page>
      <Hero title={title} subtitle={description}>
        <section>
          <div>
            <img src={owner.avatar} alt="" />
            <h3>{owner.name}</h3>
          </div>
        </section>
      </Hero>

      <Row>
        <ul>{choices}</ul>

        <footer>
          <p>
            powered by{' '}
            <a className="link" href="https://github.com/bukinoshita/gh-polls">
              gh-polls
            </a>.
          </p>
        </footer>
      </Row>

      <style jsx>{`
        section {
          display: flex;
          align-items: center;
          flex-direction: column;
        }
        div {
          display: flex;
          align-items: center;
        }

        div img {
          width: 20px;
          height: 20px;
          border-radius: 3px;
        }

        div h3 {
          font-weight: 500;
          font-size: 14px;
          margin-left: 8px;
          color: ${colors.silver};
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
          font-weight: ${typography.regular};
          font-size: ${typography.f12};
        }

        a {
          padding: 0;
          display: inline-block;
          color: ${colors.silver};
          font-weight: ${typography.medium};
        }

        a:hover {
          text-decoration: underline;
          color: ${colors.black};
        }
      `}</style>
    </Page>
  )
}

Poll.propTypes = {
  title: PropTypes.string,
  options: PropTypes.array,
  description: PropTypes.string,
  owner: PropTypes.object
}

export default Poll
