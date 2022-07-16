const promise = new Promise((resolve, reject) => {
    reject(Error('Some Error Occurred'));
  })
  .catch(error => console.log(error))
  .then(error => console.log(error));

// catch function implicity returns itself an promise which is undefined generally if we do not write anything