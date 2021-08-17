var db = require('../db');

module.exports = {
  getProductFeatures: (cb, id) => {
    var result;
    var pgQuery = `
      SELECT * FROM mysdcschema.product
      WHERE mysdcschema.product.id='${id}';
      `
    var pgQuery2 = `
      SELECT feature, value FROM mysdcschema.features
      WHERE product_id='${id}';
    `

    db.query(pgQuery)
      .then((data)=> {result = data.rows[0]})
      .then(()=>{
        db.query(pgQuery2)
        .then((data)=>{(result.features = data.rows)})
        .then(console.log(result))
        .then(()=>{cb(result)})
      })
      .catch((error)=>{console.log(error)})
  }
}