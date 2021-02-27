const { useState, useEffect } = React

const App = () => {

    const [pictureCat, setpictureCat] = useState( '' )

    useEffect( () => {
        ajax_get();
    }, [] )


    function ajax_get ( ) {
        let url = 'https://api.thecatapi.com/v1/images/search?size=full'

        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function () {
            if ( xmlhttp.readyState == 4 && xmlhttp.status == 200 ) {
                console.log( 'responseText:' + xmlhttp.responseText );
                try {
                    var data = JSON.parse( xmlhttp.responseText );
                } catch ( err ) {
                    console.log( err.message + " in " + xmlhttp.responseText );
                    return;
                }
                setpictureCat(data[0]["url"])
            }
        };

        xmlhttp.open( "GET", url, true );
        xmlhttp.send();
    }

    

    return (
        <section style={{ width: '100vw' , height : '100vh' }} >
            <h1> Show Cats Picture </h1>
            <div style={{textAlign: 'center'}} >
                <img src={pictureCat} style={{ width : '500px', height : '500px' }} ></img>
            </div>
            <button onClick={ajax_get} > Change Picture </button>
        </section>
    )
}

const appElement = document.getElementById( 'app' )
ReactDOM.render( <App />, appElement )
