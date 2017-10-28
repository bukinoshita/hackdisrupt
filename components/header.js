'use strict'

import React from 'react'
import Link from 'next/link'

import Logo from './../ui/logo'

const Header = () => {
  return (
    <header>
      <Link href="/">
        <Logo size="150px" />
      </Link>

      <style jsx>{`
        header {
          height: 100px;
          line-height: 100px;
        }
      `}</style>
    </header>
  )
}

export default Header
