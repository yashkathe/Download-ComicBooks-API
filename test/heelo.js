function justTesting(input) {
    return new Promise(function(resolve, reject) {
        // some async operation here
        setTimeout(function() {
            // resolve the promise with some value
            resolve(input + 10);
        }, 2000);
    });
}

justTesting(10).then(function(val) {
   // you access the value from the promise here
   console.log(val)
});

// display output in snippet
// function log(x) {
//     console.log(x)
// }