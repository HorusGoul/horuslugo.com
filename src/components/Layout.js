import React from 'react'
import { Link } from 'gatsby'
import LanguageSwitcher from './LanguageSwitcher'

import { rhythm } from '../utils/typography'

class Layout extends React.Component {
  render() {
    const { location, config, children, translations } = this.props
    let header
    let headerStyles = {};
    const slug = config.fields.slug.replace(/\/$/, "");
    const pathname = location.pathname.replace(/\/$/, "");

    if (`${__PATH_PREFIX__}${slug}` === pathname) {
      headerStyles.marginBottom = rhythm(1.5);

      header = (
        <h1
          style={{
            fontSize: '2rem',
            marginTop: 0,
            marginBottom: 0,
          }}
        >
          <Link
            style={{
              boxShadow: 'none',
              textDecoration: 'none',
              color: 'inherit',
              backgroundImage: 'none',
            }}
            to={config.fields.slug}
          >
            {config.frontmatter.title}
          </Link>
        </h1>
      )
    } else {
      headerStyles.marginBottom = rhythm(-0.5);
      header = (
        <h3
          style={{
            marginTop: 0,
            marginBottom: 0,
            color: 'hsl(162, 32%, 48%)',
          }}
        >
          <Link
            style={{
              boxShadow: 'none',
              textDecoration: 'none',
              color: 'inherit',
              backgroundImage: 'none',
            }}
            to={'/'}
          >
            {config.frontmatter.title}
          </Link>
        </h3>
      )
    }
    return (
      <div
        style={{
          marginLeft: 'auto',
          marginRight: 'auto',
          maxWidth: rhythm(24),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}
      >
        <div style={{
          display: 'flex',
          alignItems: 'center',
          ...headerStyles
        }}>
          {header}
          <LanguageSwitcher language={config.frontmatter.language} translations={translations}/>
        </div>
        
        {children}

        <footer style={{
          display: 'flex',
          alignItems: 'center',
          paddingTop: rhythm(1.5),
          paddingBottom: rhythm(1.5),
          fontWeight: 'bold',
        }}>
          <a href="https://mobile.twitter.com/HorusGoul">twitter</a>
          &nbsp;
          ·
          &nbsp;
          <a href="https://github.com/HorusGoul">github</a>
          &nbsp;
          ·
          &nbsp;
          <a href="https://stackoverflow.com/cv/horus">curriculum vitae</a>
        </footer>
      </div>
    )
  }
}

export default Layout
