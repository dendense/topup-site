import React from "react"
import { Link } from "gatsby"

import SEO from "../components/Seo"

export default function NotFound() {
  return (
    <div className="d-flex align-items-center mt-3">
      <SEO title="Page Not Found" />
      <div
        className="container d-flex justify-content-center flex-column text-center"
        style={{ marginTop: "6em" }}
      >
        <h2>This Page is Lost in Space</h2>
        <div>
          <Link to="/" className="btn btn-primary">
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  )
}
