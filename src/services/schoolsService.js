const { School } = require('../models/');

const index = async () => {
  const list = await School.findAll();
  return list;
};

const show = async (id) => {
  const school = await School.findByPk(id);
  return school;
};
const update = async (id, data) => {
  const updatedId = await School.update(data, {where: {id}});
  return updatedId;
};
const remove = async (id) => {
  console.log('id', id)
  const removedId = await School.destroy({where: {id}});
  return removedId;
};

module.exports = {
  index,
  show,
  update,
  remove,
};
