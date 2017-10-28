'use strict'

import React from 'react'

import { colors, tablet } from './../theme'
import ShareTwitter from './share-twitter'
import ShareFacebook from './share-facebook'
import LanguageAnimation from './language-animation'

const HomeSidebar = () => {
  const text =
    'Entrei na lista do hackdisrupt! Aprenda programação com uma experiencia nova.'
  const url = 'https://hackdisrupt.now.sh'
  const languages = [
    'javascript',
    'go',
    'ruby',
    'nodejs',
    'reactjs',
    'redux',
    'python',
    'ios',
    'android',
    'react-native',
    'java',
    'c++',
    'php',
    'graphql',
    'mongodb',
    'rails',
    'postgresql'
  ]

  return (
    <aside className="home-sidebar">
      <div className="sidebar-info">
        <h2>criando conteúdo em português para a comunidade brasileira.</h2>
        <LanguageAnimation languages={languages} />
      </div>

      <footer className="sidebar-footer">
        <span>compartilhe</span>

        <ul>
          <li>
            <ShareTwitter url={url} text={text} />
          </li>

          <li>
            <ShareFacebook text={text} />
          </li>
        </ul>
      </footer>

      <style jsx>{`
        .home-sidebar {
          background-color: ${colors.black};
          height: 100%;
          width: 100%;
          min-height: 100vh;
          text-align: center;
          flex-basis: 35%;
          padding-left: 50px;
          padding-right: 50px;
          position: relative;
          display: flex;
          align-items: center;
        }

        .sidebar-info {
          width: 100%;
        }

        .sidebar-footer {
          position: absolute;
          bottom: 50px;
          left: 0;
          right: 0;
          margin-left: auto;
          margin-right: auto;
        }

        h2 {
          color: ${colors.white};
          font-size: 18px;
          font-weight: 400;
          line-height: 28px;
        }

        strong {
          font-weight: 600;
        }

        span {
          color: ${colors.white};
          font-weight: 300;
          font-size: 12px;
          margin-bottom: 15px;
          display: block;
        }

        li {
          display: inline-block;
          margin-left: 10px;
          margin-right: 10px;
        }

        @media ${tablet} {
          .home-sidebar {
            flex-basis: 100%;
          }
        }
      `}</style>
    </aside>
  )
}

export default HomeSidebar
