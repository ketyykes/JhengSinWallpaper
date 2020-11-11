let getFooter =document.getElementById("footer");
fetch('footer.html').then(function (response) {
            if (response.ok) {
                console.log("hellowrold");
                return response.text();
            }
            throw new Error('Network response was not ok.');
        }).then(function (text) {
            getFooter.innerHTML = text;
        }).catch(function (error) {
            console.log('SomethingError ', error.message);
        });