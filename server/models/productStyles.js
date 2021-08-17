var db = require('../db');

module.exports = {
  getProductStyles: (cb, id) => {
    var result = {product_id: id};
    var pgQuery = `
      SELECT * FROM mysdcschema.styles
      WHERE mysdcschema.styles.product_id='${id}';
      `
    var pgQuery2 = `
      SELECT feature, value FROM mysdcschema.features
      WHERE product_id='${id}';
    `

    db.query(pgQuery)
      .then((data)=> {result.results = data.rows})
      .then(()=>{

        result.results.forEach((style)=>{
          var photoQuery = `
        SELECT thumbnail_url, photo_url
        FROM mysdcschema.photos
        WHERE style_id='${style.id}';
        `;
        db.query(photoQuery)
          .then((data)=>{style.photos = data.rows})
          .catch((error)=>{console.log(error)})
        })
        // .then(()=> {cb(result)})
      })

      // .then(()=>{
      //   db.query(pgQuery2)
      //   .then((data)=>{(result.features = data.rows)})
      //   .then(console.log(result))
      //   .then(()=>{cb(result)})
      // })
      .catch((error)=>{console.log(error)})

      Promise.all(result)
        .then(()=>{cb(result)})
        .catch((error)=>{'error in All'})
  }
}