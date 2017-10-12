'use strict'

const Row = ({ children }) => (
  <div>
    {children}

    <style jsx>{`
      div {
        max-width: 1080px;
        margin-left: auto;
        margin-right: auto;
        padding-left: 24px;
        padding-right: 24px;
      }
    `}</style>
  </div>
)

export default Row
