var models = require('../models');


module.exports = {
  get: function (req, res) {
    var count = 5; // default val
    if(req.query.count) {
      count = req.query.count
    }
      models.products.getProducts((data)=>{res.send(data.rows)}, count)
  }
}