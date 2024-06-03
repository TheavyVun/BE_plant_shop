const Sequelize = require("sequelize")

const plant_gifts_table = require('../config/database').define(
    "plant_gifts",
    {
      name: {
        type: Sequelize.STRING,
      },
    },
    { tableName: "plant_gifts" }
  )
module.exports = plant_gifts_table
