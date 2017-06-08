import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'
import Landing from './Landing'

const App = React.createClass({
  render () {
    return (
      <BrowserRouter>
        <div className='app'>
          <Route exact pattern='/' component={Landing} />
        </div>
      </BrowserRouter>
    )
  }
})

render(<App />, document.getElementById('app'))

// <App /> compiles to React.createElement()
