const Sequelize = require("sequelize")

const images_table = require('../config/database').define(
    "images",
    {
      name: {
        type: Sequelize.STRING,
      },
      product_id: {
        type: Sequelize.INTEGER,
      },
    },
    { tableName: "images" }
  )
module.exports = images_table
