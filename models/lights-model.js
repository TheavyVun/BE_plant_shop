const Sequelize = require("sequelize")

const lights_table = require('../config/database').define(
    "lights",
    {
      name: {
        type: Sequelize.STRING,
      },
    },
    { tableName: "lights" }
  )
module.exports = lights_table
