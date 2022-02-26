const { School, Grade } = require('../models/');

const index = async () => {
  const list = await School.findAll({ include: [{ model: Grade, as: 'grades', foreignKey: 'school_id'}]});
  return list;
};

const show = async (id) => {
  const school = await School.findByPk(id);
  return school;
};
const store = async (data) => {
  const storedSchool = await School.create(data);
  return storedSchool;
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
  store,
  update,
  remove,
};
