
window.addEventListener("DOMContentLoaded", () => {
const getAxios = (axios) => {
    return axios.get("https://jsonplaceholder.typicode.com/users");
};
const userData = {
    name: 'Waldemar',
    age: 40,
};
const postAxios = (axios) => { 
    return axios.post("https://jsonplaceholder.typicode.com/users", userData );
};

    Promise.all([getAxios(axios), postAxios(axios)])
        .then((response) => {
            console.log(response[0].data);
            console.log(response[1].data);
            console.log(response[1].headers);
            console.log(response[1].config);
            console.log(response[1].status);
        });
});