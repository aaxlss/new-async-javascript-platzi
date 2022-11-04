import fetch from "node-fetch";

const baseURL = 'https://api.escuelajs.co/api/v1/'
const productsBase = 'products'
const categoriesBase = 'categories'

const fetchData = async (URL) => {
    const response = await fetch(URL);
    const data = await response.json();
    return data
}

const anotherFn = async () => {
    try {
        const products = await fetchData(`${baseURL}${productsBase}`);
        const product = await fetchData(`${baseURL}${productsBase}/${products[0].id}`);
        const category = await fetchData(`${baseURL}${categoriesBase}/${product.category.id}`);

        console.log(products);
        console.log(product);
        console.log(category);
    } catch (error) {
        console.error(error)
    }
}

anotherFn();