const Sequelize = require("sequelize")
const bcrypt = require('bcryptjs');

const users = require('../config/database').define(
    "users",
    {
      name: Sequelize.STRING,
      email: Sequelize.STRING,
      password: Sequelize.STRING,
      role: Sequelize.STRING,
      profile: Sequelize.STRING,
    },
    { tableName: "users" }
  )
users.beforeCreate(async (users, options) => {
  console.log(users)
  try {
    const hash = await bcrypt.hash(users.password, 10);
    users.password = hash;
  } catch (err) {
    throw new Error();
  }
});

module.exports = users
