var db = require('../db');

module.exports = {
  getProducts: (cb, count) => {
    console.log('getDefault5')
    var query5 = `SELECT * FROM mysdcschema.product LIMIT ${count};`
    console.log(query5);
    db.query(query5)
      .then((data)=> {cb(data)})
      .catch((error)=>{console.log(error)})
  }
}