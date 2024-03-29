'use strict'

import React from 'react'
import Head from 'next/head'
import Router from 'next/router'
import Progress from 'nprogress'
import PropTypes from 'prop-types'

import pkg from './../package'
import { colors } from './../theme'

let progress
const stopProgress = () => {
  clearTimeout(progress)
  Progress.done()
}

Router.onRouteChangeStart = () => {
  progress = setTimeout(Progress.start, 200)
}

Router.onRouteChangeComplete = stopProgress
Router.onRouteChangeError = stopProgress

if (global.document) {
  const info = [
    `Version: ${pkg.version}`,
    `Find the code here: https://github.com/${pkg.repository}`,
    `Have a great day! 🎉`
  ]

  for (const message of info) {
    console.log(message)
  }
}

const viewSource = event => {
  const allowed = ['P', 'H1', 'SPAN']

  if (allowed.includes(event.target.tagName)) {
    return
  }

  document.location = `https://github.com/${pkg.repository}`
  event.preventDefault()
}

const Page = ({ children }) => {
  return (
    <main onDoubleClick={viewSource}>
      <Head>
        <title>
          {pkg.name} — {pkg.description}
        </title>

        <meta name="theme-color" content={colors.black} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta name="description" content={pkg.description} />
        <meta name="keywords" content={pkg.keywords} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@bukinoshita" />
        <meta name="twitter:creator" content="@bukinoshita" />
        <meta name="twitter:title" content={pkg.name} />
        <meta name="twitter:description" content={pkg.description} />
        <meta
          property="twitter:image:src"
          content={`https://hackdisrupt.now.sh/static/cover.png`}
        />

        <meta property="og:url" content="https://hackdisrupt.now.sh" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={pkg.name} />
        <meta property="og:image" content="static/cover.png" />
        <meta property="og:description" content={pkg.description} />
        <meta property="og:site_name" content={pkg.name} />

        <link rel="apple-touch-icon" href="/static/icon.png" />
        <link rel="icon" href="/static/icon.png" type="image/png" />

        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=UA-109136443-1"
        />
        <script src="/static/analytics.js" />
      </Head>

      {children}

      <style jsx global>
        {`
          * {
            padding: 0;
            margin: 0;
            -webkit-font-smoothing: antialiased;
            box-sizing: border-box;
            font-family: -apple-system, system-ui, BlinkMacSystemFont,
              'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
          }

          a {
            text-decoration: none;
          }

          li {
            list-style: none;
          }

          img {
            max-width: 100%;
          }

          #nprogress {
            pointer-events: none;
          }

          #nprogress .bar {
            background: ${colors.black};
            position: fixed;
            z-index: 1031;
            top: 0;
            left: 0;
            width: 100%;
            height: 2px;
          }

          #nprogress .peg {
            display: block;
            position: absolute;
            right: 0px;
            width: 100px;
            height: 100%;
            box-shadow: 0 0 10px ${colors.black}, 0 0 5px ${colors.black};
            opacity: 1;
            transform: rotate(3deg) translate(0px, -4px);
          }

          svg {
            vertical-align: middle;
          }

          ::-moz-selection {
            background: ${colors.azure};
            color: ${colors.white};
          }

          ::selection {
            background: ${colors.azure};
            color: ${colors.white};
          }
        `}
      </style>
    </main>
  )
}

Page.propTypes = {
  children: PropTypes.node
}

export default Page
