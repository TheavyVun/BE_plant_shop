const Sequelize = require("sequelize")

const product_sizes_table = require('../config/database').define(
    "product_sizes",
    {
      product_id: {
        type: Sequelize.INTEGER,
      },
      size_id: {
        type: Sequelize.INTEGER,
      },
      price: {
        type: Sequelize.INTEGER,
      },
    },
    { tableName: "product_sizes" }
  )
module.exports = product_sizes_table
