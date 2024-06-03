const Sequelize = require("sequelize")

const plant_gift_products_table = require('../config/database').define(
    "plant_gift_products",
    {
      product_id: {
        type: Sequelize.INTEGER,
      },
      plant_gift_id: {
        type: Sequelize.INTEGER,
      },
    },
    { tableName: "plant_gift_products" }
  )
module.exports = plant_gift_products_table
