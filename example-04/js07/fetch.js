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
// getProducts(url);

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

        // Saving in browser
        localStorage.setItem("my-products", JSON.stringify(productsObject));

        // Getting products inside object
        productsObject.forEach(product => console.log(product.title));
    } catch (error) { console.log(error); }
};

// getProductsWithAwait(url);

// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
// POST Petition
// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

const postUser = (url, user) => {
    fetch(url, {
        method: "POST",
        body: JSON.stringify(user),
        headers : { 'Content-Type': 'application/json' }
    }).then(responseJson => responseJson.json())
      .then(responseObject => console.log(responseObject))
      .catch(error => {});
};

const user = {
    name: "El Santi",
    job: "leader"
};

const urlPost = "https://reqres.in/api/users";
postUser(urlPost, user);