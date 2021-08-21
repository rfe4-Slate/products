var models = require('../models');

module.exports = {
  get: (req, res) =>{
    var productID = req.params.product_id;
    models.related.getRelated((data)=>{res.send(data)}, productID)
  }
}