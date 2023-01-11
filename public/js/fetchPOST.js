window.addEventListener( 'DOMContentLoaded', () => {
    const form = document.querySelector('form');
    const url = 'http://localhost:3000/people';

        const requestFn = (e) => {
            e.preventDefault(); 
            const formData = new FormData(form);
            formData.append('id', Math.random());
            const dataObject = {};
            formData.forEach((value, key) => {
                dataObject[key] = value;
            });
            async function getResource(url, data) {
                const resource = await fetch(url, {
                    method: 'POST',
                    headers: {
                        "Content-type": "application/json",
                    },
                    body: JSON.stringify(data), 
                });
                if(!resource.ok) {
                    throw new Error(`Could not fetch ${url}, status ${resource.status}`);
                }
                return await resource.json();
            }
            getResource(url , dataObject)
            .then(resource => console.log(resource))
            .catch(err => console.error(err));  
        };
        form.addEventListener('submit', (e) => requestFn(e), {'once': true});
} );