'use strict'

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import 'isomorphic-fetch' // eslint-disable-line import/no-unassigned-import

import Page from './../layouts/page'

import HomeMain from './../components/home-main'
import HomeSidebar from './../components/home-sidebar'

class Home extends Component {
  static async getInitialProps() {
    try {
      const res = await fetch(`${process.env.API_URL}/users`, {
        headers: {
          Authorization: process.env.API_TOKEN
        }
      })
      const json = await res.json()

      return { users: json }
    } catch (err) {
      return {
        users: { count: 0 },
        logged: false
      }
    }
  }

  render() {
    const { users } = this.props

    return (
      <Page>
        <section>
          <HomeMain count={users.count} />
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
