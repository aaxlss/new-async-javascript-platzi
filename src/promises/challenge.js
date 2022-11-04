import fetch from "node-fetch";


const baseURL = 'https://api.escuelajs.co/api/v1/'
const productsBase = 'products'
const categoriesBase = 'categories'

const fetchData = (data) =>{
    return fetch(data);
}

// fetchData(`${baseURL}${products}`)
// .then(response => response.json())
// .then(products => console.log(products))

fetchData(`${baseURL}${productsBase}`)
.then(response => response.json())
.then(products =>{
    fetch(`${baseURL}${productsBase}/${products[0].id}`)
    .then(response => response.json())
    .then(product => {
        fetch(`${baseURL}${categoriesBase}/${product.category.id}`)
        .then(response => response.json())
        .then(category => console.log(category))
    })}
)
.catch(err => console.log(err))
.finally(()=> console.log('Finally'))