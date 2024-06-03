const Sequelize = require("sequelize")

const plant_life_styles_table = require('../config/database').define(
    "plant_life_styles",
    {
      name: {
        type: Sequelize.STRING,
      },
    },
    { tableName: "plant_life_styles" }
  )
module.exports = plant_life_styles_table
