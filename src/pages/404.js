import React from 'react'
import { rhythm } from '../utils/typography'

const NotFoundPage = () => (
  <div style={{ margin: rhythm(2) }}>
    <h1>Not found</h1>
    <p>You just hit a route that doesn&#39;t exist...</p>

    <a href="#" onClick={() => history.go(-1)}>Go back</a>
  </div>
)

export default NotFoundPage
