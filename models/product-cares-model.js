const Sequelize = require("sequelize")

const product_cares_table = require('../config/database').define(
    "product_cares",
    {
      product_id: {
        type: Sequelize.INTEGER,
      },
      care_id: {
        type: Sequelize.INTEGER,
      },
    },
    { tableName: "product_cares" }
  )
module.exports = product_cares_table
