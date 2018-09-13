import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <section class="landing-section">
      <h1>SteeleWalston</h1>
      <Link to="/dev/">Dev</Link>
      <Link to="/art/">Art</Link>
    </section>
  </Layout>
)

export default IndexPage
