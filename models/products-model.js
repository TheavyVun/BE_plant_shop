const Sequelize = require("sequelize")

const products_table = require('../config/database').define(
    "products",
    {
      name: {
        type: Sequelize.STRING,
      },
      code: {
        type: Sequelize.STRING,
      },
      description: {
        type: Sequelize.STRING,
      },
      image_url: {
        type: Sequelize.STRING,
      },
    },
    { tableName: "products" }
  )
module.exports = products_table
