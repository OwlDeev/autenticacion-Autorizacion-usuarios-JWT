const { pool } = require('../config/dataBase')
const format = require('pg-format')

exports.postUsuarios = async () => {
  try {
    console.log('funciona desde consulta')
  } catch (error) {}
}

exports.getUsuarios = async ({ precio_min }) => {
  try {
    console.log('funciona')
  } catch (error) {}
}

exports.postLogin = async ({ precio_min }) => {
  try {
    console.log('funciona')
  } catch (error) {}
}
