
let getHeader = document.getElementById("header");
fetch('header.html').then(function (response) {
    if (response.ok) {
        console.log("hellowrold");
        return response.text();
    }
    throw new Error('Network response was not ok.');
}).then(function (text) {
    getHeader.innerHTML = text;
}).catch(function (error) {
    console.log('SomethingError ', error.message);
});