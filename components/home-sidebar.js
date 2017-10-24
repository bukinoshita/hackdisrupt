'use strict'

import { colors } from './../theme'
import ShareTwitter from './share-twitter'
import ShareFacebook from './share-facebook'

const HomeSidebar = () => {
  return (
    <aside className="home-sidebar">
      <div className="sidebar-info">
        <h2>criando conteúdo em português para a comunidade brasileira.</h2>

        <div className="languages">
          <span>
            hackdisrupt.<strong>javascript</strong>
          </span>
        </div>
      </div>

      <footer className="sidebar-footer">
        <span>compartilhe</span>

        <ul>
          <li>
            <ShareTwitter href="https://bukinoshita.io" />
          </li>

          <li>
            <ShareFacebook href="https://bukinoshita.io" />
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

        .languages span {
          color: ${colors.white};
          font-size: 16px;
          font-weight: 400;
          margin-top: 50px;
          font-weight: 300;
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
      `}</style>
    </aside>
  )
}

export default HomeSidebar
