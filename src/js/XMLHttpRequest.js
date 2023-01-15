window.addEventListener( 'DOMContentLoaded', () => {
        const requestFn = () => {
            const request = new XMLHttpRequest();
                request.open('GET', 'http://localhost:3000/people');
                request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
                request.send();   //? if we have 'POST' request, we need body in send(body)
                            //? 0	UNSENT	Объект был создан. Метод open() ещё не вызывался.
                            //? 1	OPENED	Метод open() был вызван.
                            //? 2	HEADERS_RECEIVED  Метод send() был вызван, доступны HEADERS и статус.
                            //? 3	LOADING	responseText содержит частичные данные.
                            //? 4	DONE
            const createCards = (response) => {                
                response.forEach(item => {
                    const div = document.createElement('div');
                    div.classList.add('card');
                    if(item.sex === 'male') {
                            div.innerHTML = `
                            <img src="${item.photo}" alt="photo">
                            <div class="name">${item.name} ${item.surname}</div>
                            <div class="sex">
                            <img src="icons/mars.png" alt="male">
                            </div>
                            <div class="age">${item.age}</div>
                        `;
                    } else {
                        div.innerHTML = `
                        <img src="${item.photo}" alt="photo">
                        <div class="name">${item.name} ${item.surname}</div>
                        <div class="sex">
                        <img src="icons/female.png" alt="female">
                        </div>
                        <div class="age">${item.age}</div>
                    `;
                    }
                    document.querySelector('.app').append(div);
                });
            };
                request.addEventListener('readystatechange', () => {              //! "readystatechange" or "load"
                        if(request.status === 200 && request.readyState === 4) {
                            const data = JSON.parse(request.response);
                            console.log(data);
                            createCards(data);
                        } else {
                            console.error('by "readystatechange" always ERROR twice'); 
                            //! by "readystatechange" always ERROR twice 
                            }
                });
            document.querySelector('button').style.display = 'none';    
        };
        document.querySelector('button').addEventListener('click',  requestFn, {'once': true});
} );