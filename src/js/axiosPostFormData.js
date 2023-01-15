window.addEventListener( 'DOMContentLoaded', () => {
    const link = 'api.php';
    const form = document.querySelector('form');
        const requestFn = (e) => {
            e.preventDefault();
            const formData = new FormData(form);
            formData.append('id', Math.random());
            async function getResource(link, formData) {
                const resource = await axios.post({
                    url: link,
                    data: formData,
                    headers: {"content-type": "multipart/form-data"},
                    }); //! instead of fetch
                if(resource.status !== 200) {
                    throw new Error(`Could not fetch ${link}, status ${resource.status}`);
                }
                return  resource; //! not need parse, and because not need await
            }
            getResource(link, formData)
            .then(data => console.log(data.data))  
            //! data.data - because axios data contains more data then we need(including status and other)
            .catch(err => console.error(err)); 
        };
        form.addEventListener('submit', (event) => requestFn(event), {'once': true});
} );