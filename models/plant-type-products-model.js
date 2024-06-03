const Sequelize = require("sequelize")

const plant_type_products_table = require('../config/database').define(
    "plant_type_products",
    {
      product_id: {
        type: Sequelize.INTEGER,
      },
      plant_type_id: {
        type: Sequelize.INTEGER,
      },
    },
    { tableName: "plant_type_products" }
  )
module.exports = plant_type_products_table
