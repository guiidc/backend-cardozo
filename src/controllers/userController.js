const bcrypt = require('bcryptjs');
const userService = require('../services/userService');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const authErrorMessage = {message: 'E-mail ou senha incorretos, tente novamente.'}

const login = async (req, res) => {
  const {email, password} = req.body;
  const user = await userService.login(email);
  if(!user) return res.status(403).json(authErrorMessage);
  try {
    bcrypt.compareSync(password, user.password)
    const token = jwt.sign({id: user.id, email: user.email}, process.env.JWT_SECRET);
    return res.status(200).json({token})
  } catch {
    return res .status(200).json(authErrorMessage)
  }
};

module.exports = { login };