// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
// Fetch API with Then-Catch-Finally
// We use fetch for HTTP petitions, it works like promises
// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

const getProducts = httpUrl =>
    // HTTP get petition, returns a JSON file
    fetch(httpUrl)
        .then(productsJson => {
            console.log("Response:", productsJson.status);
            // JSON conversion to object
            return productsJson.json();
        })
        .then (productsObject => {
            console.log(productsObject);
            // Getting products inside object
            productsObject.forEach(product => console.log(product.title));
        })
        .catch(error => console.log(error));

const url = "https://fakestoreapi.com/products";
getProducts(url);

// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
// Fetch API with Asyn-Await
// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
const getProductsWithAwait = async httpUrl => {
    try {
        // HTTP get petition, returns a JSON file
        const productsJson = await fetch(httpUrl);

        // JSON conversion to object
        const productsObject = await productsJson.json(); 
        console.log(productsObject);

        // Getting products inside object
        productsObject.forEach(product => console.log(product.title));
    } catch (error) { console.log(error); }
};

getProductsWithAwait(url);