const url = "https://jsonplaceholder.typicode.com/users";

const sendRequest = ( method, url, body = null ) => {
    return new Promise( (resolve, reject) => {
        const xhr = new XMLHttpRequest();
            xhr.open( method, url );
            xhr.responseType = 'json';
            xhr.setRequestHeader('Content-Type', 'application/json');
            xhr.send(JSON.stringify(body));
            xhr.addEventListener("load", ( e ) => {
                if(xhr.status >= 400) {
                    reject( xhr.response );
                }else {
                    resolve( xhr.response );
                }
    
            });
            xhr.addEventListener("error", ( e ) => {
                    reject( xhr.response );
            });
    });
};
// sendRequest('GET', url)
// .then(data => console.log(data))
// .catch(err => console.log(err));
const body = {
    name: 'Wladlen',
    ege: 27,
};
sendRequest( 'POST', url, body )
.then( data => console.log( data ) )
.catch( err => console.log( err ) );