const Sequelize = require("sequelize")

const plant_life_style_products_table = require('../config/database').define(
    "plant_life_style_products",
    {
      plant_life_style_products_id: {
        type: Sequelize.INTEGER,
      },
      plant_life_style_id: {
        type: Sequelize.INTEGER,
      },
    },
    { tableName: "plant_life_style_products" }
  )
module.exports = plant_life_style_products_table
