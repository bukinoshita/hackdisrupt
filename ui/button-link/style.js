'use strict'

import css from 'styled-jsx/css'

export default css`
  a {
    border-radius: 3px;
    border: 0;
    text-transform: uppercase;
    letter-spacing: 1.25px;
    cursor: pointer;
    display: inline-block;
  }

  .normal {
    line-height: 44px;
    height: 44px;
    padding-left: 20px;
    padding-right: 20px;
    font-size: 12px;
  }

  .small {
    line-height: 34px;
    height: 34px;
    padding-left: 10px;
    padding-right: 10px;
    font-size: 10px;
  }

  .black {
    background-color: #000000;
    color: #ffffff;
  }

  .twitter {
    background-color: #1da1f2;
    color: #ffffff;
  }

  .facebook {
    background-color: #4267b2;
    color: #ffffff;
  }
`
