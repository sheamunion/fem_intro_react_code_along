/* global React ReactDOM */
var div = React.DOM.div
var h1 = React.DOM.h1

var MyTitle = React.createClass({
  render () {
    return (
      div(null,
        h1({ style: { color: this.props.color, size: this.props.fontstyle } }, this.props.title)
      )
    )
  }
})

var MyTitleFactory = React.createFactory(MyTitle)

var MyFirstComponent = React.createClass({
  render: function () {
    return (
      div(null,
        MyTitleFactory({title: 'a title prop', color: 'blue'}),
        MyTitleFactory({title: 'another title', color: 'peru'}),
        MyTitleFactory({title: 'it\'s the final title', color: 'lavender'})
      )
    )
  }
})

ReactDOM.render(React.createElement(MyFirstComponent), document.getElementById('app'))
