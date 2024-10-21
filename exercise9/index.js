// Kawonal, Avrilia Irena

// 1
Promise
// A
function helloWorld() {
    return new Promise((resolve) => {
        setTimeout(() => {
        resolve("Hello World!");
        }, 2000);
    });
}
  
//  B
async function messages() {
    const msg = await helloWorld();
    console.log(msg);
}
  
//  C
messages();

fetch 
function ambilDataUser(){
    Fecth("https://reqres.in/api/users")
    .then((response) => response.json())
    .then((json) => console.log(json));
};
  
function ambilDataUser() {
    fetch("https://reqres.in/api/users")
    .then(response => response.json())
    .then(data => {
        // Tampilkan hanya email dari setiap user
        data.data.forEach(user => {
            console.log(user.email);
        });
    })
    .catch(error => {
        console.error("Terjadi kesalahan:", error);
    });
}
  
ambilDataUser();

//  3
async function ambilDataUser() {
    try {
        const response = await fetch("https://reqres.in/api/users");
        const data = await response.json();
        // Tampilkan hanya email dari setiap user
        data.data.forEach(user => {
            console.log(user.email);
        });
    } catch (error) {
        console.error("Terjadi kesalahan:", error);
    };
};
  
// 4.axios

axios
  .get("https://reqres.in/api/users")
  .then((result) => console.log(result.data));

const ambilDataUserAxios = async () => {
    let result = await axios.get("https://reqres.in/api/users");
    result.data.data.forEach((user) => console.log(user.email));
};
