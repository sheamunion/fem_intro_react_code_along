import React from 'react'
import '../public/normalize.css'
import '../public/style.css'

const Landing = React.createClass({
  render () {
    return (
      <div className='landing'>
        <h1>some videos</h1>
        <input type='text' placeholder='Search' />
        <a>or Browse All</a>
      </div>
    )
  }
})

export default Landing
