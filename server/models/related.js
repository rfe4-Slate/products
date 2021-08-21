var db = require('../db');

module.exports = {
  getRelated: (cb, id) => {
    console.log('getDefault5')
    var query = `

      SELECT
        array_agg(related_product)
      FROM
        mysdcschema.related
      WHERE
      related.current_product='${id}';
    `
    db.query(query)
      .then((data)=> {
        console.log(data.rows[0].array_agg)
        cb(data.rows[0].array_agg)
      })
      .catch((error)=>{console.log(error)})
  }
}