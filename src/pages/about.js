import React from 'react'
import { Link } from 'gatsby'
import { StaticQuery, graphql } from 'gatsby'

import Layout from '../components/layout'

const About = () => (

  <StaticQuery
    query={graphql`
     allContentfulAsset {
        edges {
          node {
            id
            file {
              url
            }
          }
        }
      }
    `}
    render={data => (
      <Layout>
        <h1>Hi from the About page</h1>
        <p>Hello I'm {data.title}</p>
        <p>Welcome to About</p>
        <Link to="/">Go back to the homepage</Link>
      </Layout>
    )}
   />
)

export default About
