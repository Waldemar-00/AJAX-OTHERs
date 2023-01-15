window.addEventListener( 'DOMContentLoaded', () => {
        const requestFn = () => {
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
            async function getResource(url) {
                const resource = await fetch(`${url}`);
                if(!resource.ok) {
                    throw new Error(`Could not fetch ${url}, status ${resource.status}`);
                }
                return await resource.json();
            }
            getResource('http://localhost:3000/people')
            .then(data => createCards(data))
            .catch(err => console.error(err));

                // fetch('http://localhost:3000/people')
                // .then(response => response.json())
                // .then(data => createCards(data))
                // .catch(err => console.error(err));

            document.querySelector('button').style.display = 'none';    
        };
        document.querySelector('button').addEventListener('click',  requestFn, {'once': true});
} );