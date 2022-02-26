const bcrypt = require('bcryptjs');

const salt = bcrypt.genSaltSync();
const has = bcrypt.hashSync('123', salt);
console.log(has)