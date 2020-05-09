function addPromise (a, b) {
    return new Promise(function(resolve, reject) {
      if (typeof a === 'number' && typeof b === 'number') {
        setTimeout(function() {
            resolve(a+b);
        }, 1000);
      }
      else {
          reject('Invalid input types')
      }
    })
}

addPromise(10, 5).then(function (response) {
  console.log('success: ', response);
}, function (err) {
  console.log('error: ', err);
})
