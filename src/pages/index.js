import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"
import WikiPage from "gatsby-theme-notes/src/components/note"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
        note: mdx(slug: {eq: "about-these-notes"}) {
          id
          body
        }
      }
  `)

  return <WikiPage data={data} />
}

export default IndexPage
