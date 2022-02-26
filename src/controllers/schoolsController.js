const schoolsController = require('../services/schoolsService');

const index = async (_req, res) => {
  const list = await schoolsController.index();
  return res.status(200).json(list)
};
const show = async (req, res) => {
  const {id} = req.params
  const school = await schoolsController.show(id);
  return res.status(200).json(school)
};
const update = async (req, res) => {
  const {id} = req.params
  const updatedId = await schoolsController.update(id, req.body);
  return res.status(200).json(updatedId)
};
const remove = async (req, res) => {
  const {id} = req.params
  const removedId = await schoolsController.remove(id);
  return res.status(200).json(removedId)
}

module.exports = {
  index,
  show,
  update,
  remove,
}