const axios = require('axios');

// axios.get('https://reqres.in/api/users?page=2')
// .then(function(response) {
//     console.log(response.status)
// }).catch(function(err) {
//     console.error(err);
// }).then(function() {});

// axios.post('https://reqres.in/api/users', {
//     "name": "Kosdcbb",
//     "job": "vcdj"
// })
// .then(function(response) {
//     console.log(response.status)
// }).catch(function(err) {
//     console.error(err);
// }).then(function() {});

axios.delete('https://reqres.in/api/users/2')
.then(function(response) {
    console.log(response.status)
}).catch(function(err) {
    console.error(err);
}).then(function() {});