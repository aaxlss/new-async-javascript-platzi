const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
const API = 'https://api.escuelajs.co/api/v1/';
const products = 'products'
const categories = 'categories'

const fetchData = (url, callback) =>{
    let xhttp = new XMLHttpRequest();
    
    xhttp.open('GET', url, true);
    xhttp.onreadystatechange = (event) =>{
        //0 not initialize
        //1 loading
        //2 send
        //3 downloading
        //4 compelted
        
        let {readyState, status} = xhttp;
        if(readyState === 4){
            if(status === 200){
            callback(null, JSON.parse(xhttp.responseText));
            } else {
                const error = new Error(`Error ${url}`)
                return callback(error, null);
            }
        }
    } 
    xhttp.send();
}

fetchData(`${API}${products}`, (error1, data1) => {
    if(error1) return console.error(error1)

    fetchData(`${API}${products}/${data1[0].id}`, (error2, data2) => {

        if(error2) return console.error(error2);
        
        fetchData(`${API}${categories}/${data2?.category?.id}`, (error3, data3) => {

            if(error3) return console.error(error3);
            
            console.log(data1[0]);
            console.log(data2?.category);
            console.log(data3?.name);

        });
    });
});