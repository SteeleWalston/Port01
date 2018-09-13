import React from 'react'
import { Link } from 'gatsby'
import { graphql } from 'gatsby'

import Layout from '../components/layout'

// const preQ = data.allContentfulProjects.edges[0].node;

export default ({ data }) => (
      <Layout>
        <h1>Hi from the About page</h1>
        <p>Hello I'm {data.allContentfulProjects.edges[0].node.title}</p>
        <p>Welcome to About</p>
        <img src={data.allContentfulProjects.edges[0].node.screenshot.file.url} alt="test"/>
        <Link to="/">Go back to the homepage</Link>
      </Layout>
)

export const query = graphql`
  query
    {allContentfulProjects {
      edges {
        node {
          id
          title
          description
          screenshot {
            id
            title
            description
            file {
              url
              fileName
              contentType
            }
          }
        }
      }
    }
  }
`
