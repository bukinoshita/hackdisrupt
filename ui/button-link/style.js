'use strict'

import css from 'styled-jsx/css' // eslint-disable-line import/no-unresolved

import { colors, typography } from './../../theme'

export default css`
  a {
    border: 0;
    text-transform: uppercase;
    letter-spacing: 1.25px;
    cursor: pointer;
    display: inline-block;
    text-align: center;
  }
  .normal {
    border-radius: 4px;
    line-height: 42px;
    height: 42px;
    padding-left: 20px;
    padding-right: 20px;
    font-size: ${typography.f12};
  }
  .small {
    border-radius: 3px;
    height: 36px;
    line-height: 36px;
    padding-left: 10px;
    padding-right: 10px;
    font-size: ${typography.f10};
  }
  .large {
    border-radius: 4px;
    height: 54px;
    line-height: 54px;
    padding-left: 20px;
    padding-right: 20px;
    font-size: ${typography.f12};
  }
  .black {
    background-color: ${colors.black};
    color: ${colors.white};
  }
  .black:hover {
    background-color: ${colors.blackHover};
  }
  .white {
    background-color: ${colors.white};
    color: ${colors.black};
  }
  .facebook {
    background-color: ${colors.facebook};
    color: ${colors.white};
  }
  .facebook:hover {
    background-color: ${colors.facebookHover};
  }
  .twitter {
    background-color: ${colors.twitter};
    color: ${colors.white};
  }
  .twitter:hover {
    background-color: ${colors.twitterHover};
  }
  .block {
    display: block;
    width: 100%;
  }
`
