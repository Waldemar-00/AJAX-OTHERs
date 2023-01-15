window.addEventListener( 'DOMContentLoaded', () => {
    const form = document.querySelector('form');
    const url = './api.php';

        const requestFn = (e) => {
            e.preventDefault(); 
            const formData = new FormData(form);
            formData.append('id', Math.random());
            async function getResource(url, formData) {
                const resource = await fetch(url, {
                    method: 'POST',
                    // headers: {
                        // "Content-type": "multipart/form-data", //! not need headers
                    // },
                    body: formData, 
                });
                if(!resource.ok) {
                    throw new Error(`Could not fetch ${url}, status ${resource.status}`);
                }
                return await resource.text();
            }
            getResource(url , formData)
            .then(resource => console.log(resource))
            .catch(err => console.error(err));  
        };
        form.addEventListener('submit', (e) => requestFn(e), {'once': true});
} );