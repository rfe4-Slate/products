var models = require('../models');

module.exports = {
  get: (req, res) => {
    var productID = req.params.product_id;
    console.log(productID)
      models.productStyles.getProductStyles((data)=>{res.send(data)}, productID)
  }

}