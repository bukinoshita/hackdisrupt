'use strict'

import React from 'react'
import PropTypes from 'prop-types'
import shareFacebook from 'share-facebook'

import { colors } from './../theme'

const ShareFacebook = ({ size, text }) => {
  const href = shareFacebook({
    quote: text,
    url: 'https://hackdisrupt.now.sh',
    redirect_uri: 'https://hackdisrupt.now.sh', // eslint-disable-line camelcase
    app_id: '1300099820094576' // eslint-disable-line camelcase
  })

  return (
    <a href={href}>
      <svg width={size} height={size} viewBox="0 0 23 23">
        <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
          <g transform="translate(-953.000000, -547.000000)">
            <g transform="translate(130.000000, 123.000000)">
              <g transform="translate(640.000000, 0.000000)">
                <g transform="translate(145.000000, 402.000000)">
                  <g id="facebook" transform="translate(38.000000, 22.000000)">
                    <circle
                      fill={colors.facebook}
                      cx="11.5"
                      cy="11.5"
                      r="11.5"
                    />
                    <g
                      transform="translate(10.000000, 7.000000)"
                      stroke={colors.white}
                      strokeWidth="0.880000032"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M4,0 L2.90909091,0 C1.90493682,1.99840144e-16 1.09090909,1.00735931 1.09090909,2.25 L1.09090909,3.6 L0,3.6 L0,5.4 L1.09090909,5.4 L1.09090909,9 L2.54545455,9 L2.54545455,5.4 L3.63636364,5.4 L4,3.6 L2.54545455,3.6 L2.54545455,2.25 C2.54545455,2.00147186 2.70826009,1.8 2.90909091,1.8 L4,1.8 L4,0 Z" />
                    </g>
                  </g>
                </g>
              </g>
            </g>
          </g>
        </g>
      </svg>
    </a>
  )
}

ShareFacebook.defaultProps = {
  size: '30px'
}

ShareFacebook.propTypes = {
  size: PropTypes.string,
  text: PropTypes.string
}

export default ShareFacebook
