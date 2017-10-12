'use strict'

import Link from 'next/link'

import Page from './../layouts/page'

import Row from './../ui/row'

export default () => (
  <Page>
    <Row>
      <header>
        <img src="/static/logo-symbol.svg" alt="" />

        <nav>
          <ul>
            <li>
              <Link prefetch href="/">
                <span>Cursos</span>
              </Link>
            </li>

            <li>
              <Link prefetch href="/">
                <span>Artigos</span>
              </Link>
            </li>

            <li>
              <Link prefetch href="/">
                <span>Projetos</span>
              </Link>
            </li>

            <li>
              <Link prefetch href="/">
                <span>Fórum</span>
              </Link>
            </li>

            <li>
              <Link prefetch href="/">
                <span>Podcasts</span>
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <section>
        <h2>hackdisrupt</h2>
        <h3>comece a aprender programação com uma experiência nova.</h3>
      </section>
    </Row>

    <style jsx>{`
      header {
        height: 64px;
        display: flex;
        align-items: center;
      }

      img {
        width: 40px;
      }

      ul {
        margin-left: 30px;
      }

      li {
        padding-left: 20px;
        padding-right: 20px;
        display: inline-block;
        cursor: pointer;
        height: 100%;
      }

      li:hover span {
        color: black;
      }

      span {
        font-size: 12px;
        color: #454343;
        font-weight: 500;
        text-transform: lowercase;
        transition: color 0.2s;
      }
    `}</style>
  </Page>
)
