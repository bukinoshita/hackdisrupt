'use strict'

import { Component } from 'react'
import Link from 'next/link'
import 'isomorphic-fetch'

import Page from './../layouts/page'

import Row from './../ui/row'
import HomeMain from './../components/home-main'
import HomeSidebar from './../components/home-sidebar'

class Home extends Component {
  static async getInitialProps() {
    const res = await fetch(`http://localhost:3001/users`)
    const json = await res.json()
    return { users: json }
  }

  render() {
    const count = this.props.users.count

    return (
      <Page>
        <section>
          <HomeMain count={count} />
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
