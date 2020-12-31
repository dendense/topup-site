import React from "react"
import { graphql } from "gatsby"

import SEO from "../components/Seo"
import Layout from "../components/Layout"
import PostsCard from "../components/PostsCard"
import Jumbotron from "../components/Jumbotron"

export default function Home({ data }) {
  return (
    <Layout>
      <SEO title="Welcome" keyword="Home" />
      <Jumbotron
        headline="FAUZISTORE.ID"
        punchline="Pay &amp; TopUp Everything With Us!"
      />
      <div style={{ marginLeft: "1rem", marginRight: "1rem" }}>
        <h4>Layanan TopUp</h4>
        <PostsCard data={data.allMarkdownRemark.nodes} col={4} />
      </div>
    </Layout>
  )
}

export const IndexQuery = graphql`
  query Boilerplate {
    allMarkdownRemark(
      sort: { order: DESC, fields: frontmatter___date }
      filter: { frontmatter: { type: { eq: "blog" } } }
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
