const Sequelize = require("sequelize")

const plant_rooms_table = require('../config/database').define(
    "plant_rooms",
    {
      name: {
        type: Sequelize.STRING,
      },
    },
    { tableName: "plant_rooms" }
  )
module.exports = plant_rooms_table
