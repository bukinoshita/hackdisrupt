'use strict'

import { colors } from './../theme'

const ShareTwitter = ({ size }) => {
  return (
    <svg width={size} height={size} viewBox="0 0 23 23">
      <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g transform="translate(-915.000000, -547.000000)">
          <g transform="translate(130.000000, 123.000000)">
            <g transform="translate(640.000000, 0.000000)">
              <g transform="translate(145.000000, 402.000000)">
                <g id="twitter" transform="translate(0.000000, 22.000000)">
                  <circle fill={colors.twitter} cx="11.5" cy="11.5" r="11.5" />
                  <g
                    transform="translate(7.000000, 8.000000)"
                    stroke={colors.white}
                    strokeWidth="0.799999952"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M9,0.00432107067 C8.6082484,0.28873261 8.17449868,0.506261806 7.71545455,0.648531597 C7.21078344,0.0512843525 6.39751499,-0.158157114 5.67903333,0.124090938 C4.96055167,0.406338989 4.48969102,1.12023723 4.5,1.91168949 L4.5,2.33274212 C3.03981743,2.37171155 1.65764672,1.65567707 0.818181818,0.425373702 C0.818181818,0.425373702 -0.818181818,4.21484739 2.86363636,5.89905791 C2.02112491,6.48767531 1.01747328,6.78281764 0,6.74116318 C3.68181818,8.84642633 8.18181818,6.74116318 8.18181818,1.89905791 C8.18144145,1.78177523 8.17048534,1.66478187 8.14909091,1.54958423 C8.56661038,1.12579184 8.86124757,0.590726454 9,0.00432107067 Z" />
                  </g>
                </g>
              </g>
            </g>
          </g>
        </g>
      </g>
    </svg>
  )
}

ShareTwitter.defaultProps = {
  size: '30px'
}

export default ShareTwitter
