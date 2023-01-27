const { postUsuarios, getUsuarios, postLogin } = require('./consultas')
// const ErrorResponse = require('../helper/errorResponse')
const { response } = require('express')

exports.postUsuarios = async (req, res, next) => {
  try {
    console.log('funciona desde controller')
  } catch (error) {}
}

exports.postLogin = async (req, res, next) => {
  try {
    console.log('funciona desde controller login')
  } catch (error) {}
}

exports.getUsuarios = async (req, res, next) => {
  try {
    console.log('funciona desde controller traer todos los usuarios')
  } catch (error) {}
}
