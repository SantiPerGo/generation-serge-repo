const url = "https://reqres.in/api/users?page=2";
const urlNotFound = "https://reqres.in/api/unknown/23";
const urlCreateUser = "https://reqres.in/api/users";

const getUsersFetch = () => {
    fetch(url)
        .then(responseJson => responseJson.json())
        .then(responseObject => {
            const users = responseObject.data;
            console.log("Fetch users:", users);
        })
        .catch(error => console.log(error));
};

const getUsersAxios = () => {
    axios.get(url)
        .then(responseObject => {
            const users = responseObject.data.data;
            console.log("Axios users:", users);
        })
        .catch(error => console.log(error));
};

const getUsersAxiosAwait = async () => {
    try {
        const responseObject = await axios.get(urlNotFound);
        console.log("Axios async-await users:", responseObject);
    } catch (error) { console.log(error); }
};

const user = {
    name: "santi pergo",
    email: "spergo@outlook.com"
};

const createUserAxios = () => {
    axios.post(urlCreateUser, user)
        .then(responseObject => {
            const user = responseObject.data;
            console.log("Axios user created:", user);
        })
        .catch(error => console.log(error));
};