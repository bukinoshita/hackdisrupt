'use strict'

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import 'isomorphic-fetch' // eslint-disable-line import/no-unassigned-import

import Page from './../layouts/page'

import { isLogged } from './../services/auth'

import HomeMain from './../components/home-main'
import HomeSidebar from './../components/home-sidebar'

class Home extends Component {
  static async getInitialProps() {
    try {
      const res = await fetch(
        `${process.env.API_URL}/users?${process.env.API_TOKEN}`
      )
      const json = await res.json()
      const logged = isLogged()

      return { users: json, logged }
    } catch (err) {
      return { users: { count: 0 }, logged: false }
    }
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

Home.propTypes = {
  users: PropTypes.object,
  logged: PropTypes.bool
}

export default Home
