import React from 'react'
import { Link } from 'gatsby'

const Header = ({ siteTitle }) => (
  <div>
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'black',
            textDecoration: 'none',
          }}
        >
          {siteTitle}
        </Link>
        <nav>
          <ul>
            <li><Link to="/about/">About</Link></li>
            <li><Link to="/projects/">Projects</Link></li>
          </ul>
        </nav>
      </h1>
    </div>
  </div>
)

export default Header
