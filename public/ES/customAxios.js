window.addEventListener("DOMContentLoaded", () => {
    const instance = axios.create();
    instance.defaults.timeout = 5000;
    const baseUrl = instance.defaults.baseURL = "https://jsonplaceholder.typicode.com/";
    const url = "users";
const getAxios = ( instance ) => {
    return instance.get(`${baseUrl}${url}`, {timeout: 1000});
};
const userData = {
    name: 'Waldemar',
    age: 40,
};
const postAxios = (axios) => { 
    return axios.post( `${baseUrl}${url}`, userData );
};

    new Promise((resolve) => resolve(getAxios(instance)))
        .then((response) => console.log(response.data))
        .catch((error) => 
        console.log(`${error.message}\n${error.name}\n${error.code}\n${error.stack}\n${error.toJSON}`));
//if (error.request || error.response) {
 //console.log(error.request);
 // console.log(error.response.status);
 // console.log(error.response.data);
 // console.log(error.response.headers);
    new Promise((resolve) => resolve(postAxios(axios)))
        .then((response) => console.log(response.data))
        .catch((err) => console.log(err));
});