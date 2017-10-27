'use strict'

import { Component } from 'react'
import Link from 'next/link'
import 'isomorphic-fetch'

import Page from './../layouts/page'

import { isLogged } from './../services/auth'

import Row from './../ui/row'
import HomeMain from './../components/home-main'
import HomeSidebar from './../components/home-sidebar'

class Home extends Component {
  static async getInitialProps() {
    const res = await fetch(`http://localhost:3001/users`)
    const json = await res.json()
    const logged = isLogged()

    return { users: json, logged }
  }

  render() {
    const { users, logged } = this.props

    return (
      <Page>
        <section>
          <HomeMain count={users.count} logged={logged} />
          <HomeSidebar />
        </section>

        <style jsx>{`
          section {
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
          }
        `}</style>
      </Page>
    )
  }
}

export default Home
