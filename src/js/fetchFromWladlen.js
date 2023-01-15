const url = "https://jsonplaceholder.typicode.com/users";
const headers = {
    "Content-type": "application/json;charset=utf-8",
};
const sendRequest = ( url, method,  headers, body ) => {
    return fetch(url, { 
        method: method,
        headers: headers,
        body: JSON.stringify(body),
    }).then( (response) => {
        if(response.ok) {
            return response.json();
        }else {
            return response.json().then(error => {
                throw new Error(error.message);
            });
        }
        
    });
};
// sendRequest(url)
// .then(data => console.log(data))
// .catch(err => console.log(err));
const body = {
    name: 'Wladlen',
    ege: 27,
};
const res = (sendRequest( url, 'POST',  headers, body )
.then( data => console.log( data ) )
.catch( err => console.log( err ) ));