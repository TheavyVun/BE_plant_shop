const Sequelize = require("sequelize")

const cares_table = require('../config/database').define(
    "cares",
    {
      name: {
        type: Sequelize.STRING,
      },
    },
    { tableName: "cares" }
  )
module.exports = cares_table
