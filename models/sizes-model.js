const Sequelize = require("sequelize")

const sizes_table = require('../config/database').define(
    "sizes",
    {
      name: {
        type: Sequelize.STRING,
      },
    },
    { tableName: "sizes" }
  )
module.exports = sizes_table
