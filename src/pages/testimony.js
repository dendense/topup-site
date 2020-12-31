import React from "react"

import SEO from "../components/Seo"
import Layout from "../components/Layout"
import Jumbotron from "../components/Jumbotron"

function Testimony() {
  const ListGroup = props => (
    <li
      className="list-group-item d-flex"
      style={{ justifyContent: "space-between" }}
    >
      {props.title}{" "}
      <a
        href={props.href}
        className="btn btn-primary btn-sm"
        target="_blank"
        rel="noreferrer noopener"
      >
        Click Here
      </a>
    </li>
  )
  return (
    <Layout>
      <SEO title="Testimony" keyword="Testimony" />
      <Jumbotron headline="Testimony" punchline="Trust is our Motto" />
      <div style={{ marginLeft: "1rem", marginRight: "1rem" }}>
        <h4>Berikut Testimony Penjualan Kami</h4>
        <div className="row">
          <div className="col">
            <ul className="list-group">
              <ListGroup
                title="Genshin Impact"
                href="https://i.ibb.co/3FMgSWf/Whats-App-Image-2020-12-30-at-8-52-00-PM.jpg"
              />
              <li className="list-group-item">Dapibus ac facilisis in</li>
            </ul>
          </div>
          <div className="col">
            <ul className="list-group">
              <li className="list-group-item">Cras justo odio</li>
              <li className="list-group-item">Dapibus ac facilisis in</li>
              <li className="list-group-item">Morbi leo risus</li>
              <li className="list-group-item">Porta ac consectetur ac</li>
              <li className="list-group-item">Vestibulum at eros</li>
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Testimony
