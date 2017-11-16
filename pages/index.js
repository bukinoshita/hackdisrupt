'use strict'

import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Page from './../layouts/page'

import HomeMain from './../components/home-main'
import HomeSidebar from './../components/home-sidebar'

import { getCookie } from './../services/cookies'

import api from './../services/api'

class Home extends Component {
  static async getInitialProps() {
    try {
      const users = await api.get(`${process.env.API_URL}/users`)

      return { users }
    } catch (err) {
      return {
        users: { count: 0 }
      }
    }
  }

  render() {
    const { users } = this.props
    const isLogged = getCookie('hackdisrupt')

    return (
      <Page>
        <section>
          <HomeMain count={users.count} logged={Boolean(isLogged)} />
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
