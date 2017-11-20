'use strict'

import css from 'styled-jsx/css' // eslint-disable-line import/no-unresolved

import { colors, typography, phone } from './../../theme'

export default css`
  div {
    width: 100%;
    position: relative;
    margin-bottom: 25px;
    transition: all 0.2s;
  }
  div:hover p {
    opacity: 1;
  }
  div:hover input,
  div:hover textarea {
    color: ${colors.black};
  }
  div:hover input::-webkit-input-placeholder {
    color: ${colors.black};
  }
  div:hover input::-moz-placeholder {
    color: ${colors.black};
  }
  div:hover input:-ms-input-placeholder {
    color: ${colors.black};
  }
  div:hover input:-moz-placeholder {
    color: ${colors.black};
  }
  div:hover textarea::-webkit-input-placeholder {
    color: ${colors.black};
  }
  div:hover textarea::-moz-placeholder {
    color: ${colors.black};
  }
  div:hover textarea:-ms-input-placeholder {
    color: ${colors.black};
  }
  div:hover textarea:-moz-placeholder {
    color: ${colors.black};
  }
  input {
    width: 100%;
    border: 1px solid ${colors.glitter};
    font-size: ${typography.f13};
    color: ${colors.lightSlateGray};
    padding: 15px;
    outline: none;
    background: none;
    appearance: none;
    border-radius: 2px;
    transition: all 0.2s;
  }
  textarea {
    width: 100%;
    border: 1px solid ${colors.glitter};
    font-size: ${typography.f13};
    color: ${colors.lightSlateGray};
    padding: 15px;
    outline: none;
    background: none;
    appearance: none;
    border-radius: 2px;
    resize: none;
    min-height: 100px;
    transition: all 0.2s;
  }
  .large {
    border: none;
    padding-left: 0;
    padding-right: 0;
    font-size: ${typography.f45};
    font-weight: ${typography.bold};
  }
  .medium {
    border: none;
    padding-left: 0;
    padding-right: 0;
    font-size: ${typography.f20};
    font-weight: ${typography.regular};
  }
  input::-webkit-input-placeholder {
    color: ${colors.lightSlateGray};
  }
  input::-moz-placeholder {
    color: ${colors.lightSlateGray};
  }
  input:-ms-input-placeholder {
    color: ${colors.lightSlateGray};
  }
  input:-moz-placeholder {
    color: ${colors.lightSlateGray};
  }
  textarea::-webkit-input-placeholder {
    color: ${colors.lightSlateGray};
  }
  textarea::-moz-placeholder {
    color: ${colors.lightSlateGray};
  }
  textarea:-ms-input-placeholder {
    color: ${colors.lightSlateGray};
  }
  textarea:-moz-placeholder {
    color: ${colors.lightSlateGray};
  }
  .large::-webkit-input-placeholder {
    color: ${colors.gainsboro};
  }
  .large::-moz-placeholder {
    color: ${colors.gainsboro};
  }
  .large:-ms-input-placeholder {
    color: ${colors.gainsboro};
  }
  .large:-moz-placeholder {
    color: ${colors.gainsboro};
  }
  label {
    display: block;
    color: ${colors.lightSlateGray};
    font-size: ${typography.f13};
    margin-bottom: 10px;
  }
  p {
    margin-top: 10px;
    font-size: ${typography.f12};
    font-family: Helvetica Neue;
    color: ${colors.lightSlateGray};
    font-style: italic;
    opacity: 0.75;
  }
  @media ${phone} {
    .large {
      font-size: ${typography.f30};
    }
    .medium {
      font-size: ${typography.f16};
    }
  }
`
