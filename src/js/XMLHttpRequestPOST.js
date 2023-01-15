window.addEventListener( 'DOMContentLoaded', () => { 
        const form = document.querySelector('form');     
        const requestFn = (e) => {
            e.preventDefault(); 
            const formData = new FormData(form);
            formData.append("id", Math.random()); //! json-server requirement, "id"
            const objectFromFormData = {};
            formData.forEach((value, key) => {
                objectFromFormData[key] = value;
            });
            const jsonBody = JSON.stringify(objectFromFormData);

            const request = new XMLHttpRequest();
                request.open('POST', 'http://localhost:3000/people');
                request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
                request.send(jsonBody);   //? if we have 'POST' request, we need body in send(body)
                            //? 0	UNSENT	Объект был создан. Метод open() ещё не вызывался.
                            //? 1	OPENED	Метод open() был вызван.
                            //? 2	HEADERS_RECEIVED  Метод send() был вызван, доступны HEADERS и статус.
                            //? 3	LOADING	responseText содержит частичные данные.
                            //? 4	DONE
                request.addEventListener('load', () => {              //! "readystatechange" or "load"
                        if( request.status === 200 ) {
                            const data = JSON.parse( request.response );
                            console.log(data);
                        } else {
                            console.error('by "readystatechange" always ERROR twice'); 
                            //! by "readystatechange" always ERROR twice 
                            }
                });    
        };
        const button = document.querySelector('button');
        button.addEventListener('click', () => button.style.display = 'none');
        form.addEventListener('submit', (e) => requestFn(e), {"once": true});
} );