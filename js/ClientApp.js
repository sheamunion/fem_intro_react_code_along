import React from 'react'
import ReactDOM from 'react-dom'
import MyTitle from './MyTitle'

var MyFirstComponent = React.createClass({
  render: function () {
    return (
      <div>
        <MyTitle title='This is the title prop' color='red' />
        <MyTitle title='Here is another title' color='green' />
      </div>
    )
  }
})

ReactDOM.render(React.createElement(MyFirstComponent), document.getElementById('app'))