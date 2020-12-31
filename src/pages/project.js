import React from "react"
import { graphql } from "gatsby"

import SEO from "../components/Seo"
import Layout from "../components/Layout"
import PostsCard from "../components/PostsCard"
import Jumbotron from "../components/Jumbotron"

export default function Project({ data }) {
  return (
    <Layout>
      <SEO title="Services" keyword="Services" />
      <Jumbotron
        headline="Another Services"
        punchline="Pay &amp; TopUp Everything With Us!"
      />
      <div style={{ marginLeft: "1rem", marginRight: "1rem" }}>
        <h4>Services List</h4>
        <PostsCard data={data.allMarkdownRemark.nodes} col={4} />
      </div>
    </Layout>
  )
}

export const IndexQuery = graphql`
  query Project {
    allMarkdownRemark(
      sort: { order: DESC, fields: frontmatter___date }
      filter: { frontmatter: { type: { eq: "services" } } }
    ) {
      nodes {
        frontmatter {
          date(formatString: "DD MMMM, YYYY")
          title
          description
          author
          tags
          path
          image
        }
      }
    }
  }
`
