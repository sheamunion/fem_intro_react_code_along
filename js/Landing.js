import React from 'react'
import { Link } from 'react-router-dom'
import '../public/normalize.css'
import '../public/style.css'

const Landing = React.createClass({
  render () {
    return (
      <div className='landing'>
        <h1>some videos</h1>
        <input type='text' placeholder='Search' />
        <Link to='/search' className='browse-all'>or Browse All </Link>
      </div>
    )
  }
})

export default Landing
