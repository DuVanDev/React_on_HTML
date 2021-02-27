
const { useState, useEffect } = React


const App = () => {
    return (
        <section>
            This is Component Create In React
        </section>
    )
}

const appElement = document.getElementById( 'app' )
ReactDOM.render( <App/>, appElement )
