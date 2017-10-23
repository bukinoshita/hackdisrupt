'use strict'

import Link from 'next/link'

import Logo from './../ui/logo'

const Header = () => {
  return (
    <header>
      <Logo size="150px" />

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
