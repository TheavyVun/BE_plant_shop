const Sequelize = require("sequelize")

const plant_room_products_table = require('../config/database').define(
    "plant_room_products",
    {
      product_id: {
        type: Sequelize.INTEGER,
      },
      plant_room_id: {
        type: Sequelize.INTEGER,
      },
    },
    { tableName: "plant_room_products" }
  )
module.exports = plant_room_products_table
