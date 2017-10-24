'use strict'

import Link from 'next/link'

import Page from './../layouts/page'

import Row from './../ui/row'
import HomeMain from './../components/home-main'
import HomeSidebar from './../components/home-sidebar'

export default () => (
  <Page>
    <section>
      <HomeMain />
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
