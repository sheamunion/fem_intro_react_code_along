/* global React ReactDOM */
var div = React.DOM.div
var h1 = React.DOM.h1

var MyTitle = React.createClass({
    render () {
        return (
            div(null,
                h1(null, 'A component!')
            )
        )
    }
})

var MyTitleFactory = React.createFactory(MyTitle)

var MyFirstComponent = (
    div(null,
        MyTitleFactory(null),
        MyTitleFactory(null),
        MyTitleFactory(null)
    )
)

ReactDOM.render(MyFirstComponent, document.getElementById('app'))