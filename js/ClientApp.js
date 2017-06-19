import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'
import Landing from './Landing'
import Search from './Search'
import Details from './Details'
import preload from '../public/data.json'

const App = React.createClass({
  render () {
    return (
      <BrowserRouter>
        <div className='app'>
          <Route exact path='/' component={Landing} />
          <Route
            path='/search'
            component={(props) => <Search shows={preload.shows} {...props} />}
          />
          <Route path='/details/:id' component={Details} />
        </div>
      </BrowserRouter>
    )
  }
})

render(<App />, document.getElementById('app'))

// <App /> compiles to React.createElement()
