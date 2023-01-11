window.addEventListener( 'DOMContentLoaded', () => {
    const url = 'http://localhost:3000/people';
    const form = document.querySelector('form');
        const requestFn = (e) => {
            e.preventDefault();
            const formData = new FormData(form);
            formData.append('id', Math.random());
            const dataObject = {};
            formData.forEach((value, key) => dataObject[key] = value);
            async function getResource(url, data) {
                const resource = await axios.post(url, data); //! instead of fetch
                if(resource.status !== 200) {
                    throw new Error(`Could not fetch ${url}, status ${resource.status}`);
                }
                return  resource; //! not need parse, and because not need await
            }
            getResource(url, dataObject)
            .then(data => console.log(data.data))  
            //! data.data - because axios data contains more data then we need(including status and other)
            .catch(err => console.error(err)); 
        };
        form.addEventListener('submit', (event) => requestFn(event), {'once': true});
} );