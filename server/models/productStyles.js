var db = require('../db');

module.exports = {
  getProductStyles: (cb, id) => {
    var pgQuery = `
    SELECT
      styles.id AS style_id,
      style_name AS "name",
      original_price,
      COALESCE(sale_price, '100') AS sale_price2,
      default_style AS "default?",
      array_agg(
        DISTINCT jsonb_build_object(
          'thumbnail_url', photos.thumbnail_url,
          'url', photos.photo_url
        )
      ) AS photos,
      COALESCE(
      json_object_agg(
        skus.id, json_build_object(
          'quantity', quantity,
          'size', size
        )
      )
       FILTER (WHERE skus.id IS NOT NULL), '{}') as skus
    FROM mysdcschema.styles
    LEFT JOIN mysdcschema.photos ON mysdcschema.styles.id = mysdcschema.photos.style_id
    LEFT JOIN mysdcschema.skus ON mysdcschema.styles.id = mysdcschema.skus.style_id

    WHERE mysdcschema.styles.product_id = '${id}'
    GROUP BY styles.id;
    `
    db.query(pgQuery)
      .then((data)=>{cb(data.rows[0])})
      .catch((error)=>{console.log(error)})
  }
}