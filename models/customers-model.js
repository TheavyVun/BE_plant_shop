const Sequelize = require("sequelize")

const customers = require('../config/database').define(
    "customers",
    {
      user_id: Sequelize.INTEGER,
      phone: Sequelize.STRING,
      address: Sequelize.STRING,
    },
    { tableName: "customers" }
  )

module.exports = customers
