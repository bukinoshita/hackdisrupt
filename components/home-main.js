'use strict'

import Row from './../ui/row'
import Button from './../ui/button'
import Header from './../components/header'

const HomeMain = () => {
  return (
    <Row>
      <Header />

      <div className="hero">
        <div className="hero-content">
          <h1>
            <strong>aprenda</strong>programação
          </h1>
          <h2>
            mais de <span>4618</span> programadores prontos para aprender.
          </h2>
          <p>aprenda / ensine / forum / trampos / podcasts</p>

          <Button>Entrar na lista beta</Button>
        </div>
      </div>

      <style jsx>{`
        .hero {
          display: flex;
          align-items: center;
          height: calc(100vh - 200px);
        }

        h1 {
          font-size: 60px;
          font-weight: 200;
        }

        strong {
          font-weight: 800;
          display: block;
        }

        span {
          font-weight: 600;
        }

        h2 {
          margin-top: 30px;
          color: #c0c0c0;
          font-weight: 400;
          font-size: 18px;
        }

        p {
          color: #c0c0c0;
          font-weight: 400;
          font-size: 18px;
          margin-top: 10px;
          margin-bottom: 50px;
        }
      `}</style>
    </Row>
  )
}

export default HomeMain
