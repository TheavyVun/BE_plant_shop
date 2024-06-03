const Sequelize = require("sequelize")

const product_lights_table = require('../config/database').define(
    "product_lights",
    {
      product_id: {
        type: Sequelize.INTEGER,
      },
      light_id: {
        type: Sequelize.INTEGER,
      },
    },
    { tableName: "product_lights" }
  )
module.exports = product_lights_table
