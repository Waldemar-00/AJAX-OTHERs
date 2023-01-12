window.addEventListener( 'DOMContentLoaded', () => { 
        const form = document.querySelector('form');     
        const requestFn = (e) => {
            e.preventDefault(); 
            const formData = new FormData(form);
            formData.append('id', Math.random());
            const request = new XMLHttpRequest();
                request.open("POST", "./api.php"); //! that file is located on server
                //request.setRequestHeader("Content-type", "multipart/form-data");//! not need headers
                request.send(formData);
                request.addEventListener('load', () => {              //! "readystatechange" or "load"
                        if( request.status === 200 ) {
                            console.log(request.response);
                        } else {
                            console.error('by "readystatechange" always ERROR twice'); 
                            //! by "readystatechange" always ERROR twice 
                            }
                });    
        };
        form.addEventListener('submit', (e) => requestFn(e), {"once": true});
} );