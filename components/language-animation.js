'use strict'

import { colors } from './../theme'

const LanguageAnimation = ({ languages }) => {
  const language = languages.map((l, i) => {
    return (
      <div key={l} className={`language language-${i + 1}`}>
        hackdisrupt.<strong>{l}</strong>
        <style jsx>{`
          .language {
            color: #ababab;
            font-weight: 300;
            font-size: 14px;
            margin-top: 15px;
            display: block;
            opacity: 0;
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
            animation-duration: 1s;
            animation-fill-mode: backwards;
            animation-name: fade;
            animation-timing-function: linear;
          }

          .language-${i + 1} {
            animation-delay: ${i + 1}s;
          }

          strong {
            font-weight: 600;
          }

          @keyframes fade {
            10%,
            80% {
              opacity: 1;
              transform: translate(-50%, 0);
            }

            100% {
              opacity: 0;
              transform: translate(-50%, 300%);
            }
          }
        `}</style>
      </div>
    )
  })

  return <div>{language}</div>
}

export default LanguageAnimation
