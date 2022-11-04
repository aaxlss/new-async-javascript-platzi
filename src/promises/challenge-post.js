import fetch from "node-fetch";

const baseURL = 'https://api.escuelajs.co/api/v1/'
const productsBase = 'products'
const categoriesBase = 'categories'

const postData = (URL, data) => {
    
    const response = fetch(URL,{
        method:'POST',
        mode: 'cors',
        credentials: 'same-origin',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    return response
}

let productObj = {
    "title": "New Product Course",
    "price": 999,
    "description": "A description",
    "categoryId": 1,
    "images": ["https://placeimg.com/640/480/any"]
  }

postData(`${baseURL}${productsBase}`, productObj)
.then(response => response.json())
.then(product=> console.log(product))