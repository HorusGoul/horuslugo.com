import React from 'react'

// Import typefaces
// import 'typeface-montserrat'
// import 'typeface-merriweather'

import profilePic from './profile-pic.png'
import { rhythm } from '../utils/typography'

class Bio extends React.Component {
  render() {
    const { children } = this.props
    return (
      <div
        style={{
          display: 'flex',
          marginBottom: rhythm(1.5),
        }}
      >
        <img
          src={profilePic}
          alt={`Horus Lugo`}
          style={{
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            width: rhythm(2),
            height: rhythm(2),
            borderRadius: rhythm(2),
          }}
        />
        {children}
      </div>
    )
  }
}

export default Bio
