const { Grade } = require('../models/');

const index = async () => {
  const list = await Grade.findAll();
  return list;
};

const show = async (id) => {
  const grade = await Grade.findByPk(id);
  return grade;
};
const update = async (id, data) => {
  const updatedId = await Grade.update(data, {where: {id}});
  return updatedId;
};
const remove = async (id) => {
  console.log('id', id)
  const removedId = await Grade.destroy({where: {id}});
  return removedId;
};

module.exports = {
  index,
  show,
  update,
  remove,
};
