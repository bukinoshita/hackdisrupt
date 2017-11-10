'use strict'

import React from 'react'
import PropTypes from 'prop-types'

import { colors, typography } from './../theme'
import Row from './../ui/row'

const Hero = ({ title, subtitle }) => {
  return (
    <section>
      <Row>
        <div>
          <h2>{title}</h2>
          <p>{subtitle}</p>
        </div>
      </Row>

      <style jsx>{`
        section {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 400px;
        }

        div {
          margin-left: auto;
          margin-right: auto;
          text-align: center;
          max-width: 500px;
          line-height: 2.2em;
        }

        h2 {
          text-transform: uppercase;
          font-weight: ${typography.bold};
          font-size: ${typography.f16};
          color: ${colors.black};
        }

        p {
          color: ${colors.silver};
          font-size: ${typography.f12};
          text-transform: uppercase;
          display: block;
        }
      `}</style>
    </section>
  )
}

Hero.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string
}

export default Hero
