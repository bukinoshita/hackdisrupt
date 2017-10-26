'use strict'

import css from 'styled-jsx/css'

import { colors } from './../../theme'

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
    height: 34px;
    padding-left: 10px;
    padding-right: 10px;
    font-size: 10px;
  }

  .black {
    background-color: #000000;
    color: #ffffff;
  }
`