const Sequelize = require("sequelize")

const plant_types_table = require('../config/database').define(
    "plant_types",
    {
      name: {
        type: Sequelize.STRING,
      },
    },
    { tableName: "plant_types" }
  )
module.exports = plant_types_table
