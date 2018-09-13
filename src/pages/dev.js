import React from 'react'
import { Link } from 'gatsby'
import Arrow from '../../assets/arrow-down-black.png'

import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <main class="dev-section">
      <section class="about-section">
        <h1>About</h1>
      </section>
      <section class="projects-section">
        <h1>Projects</h1>
      </section>
      <section class="contact-section">
        <h1>Contact</h1>
      </section>
    </main>
  </Layout>
)

export default IndexPage
