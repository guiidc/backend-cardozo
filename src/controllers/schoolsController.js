const schoolsService = require('../services/schoolsService');

const index = async (_req, res) => {
  const list = await schoolsService.index();
  return res.status(200).json(list)
};
const show = async (req, res) => {
  const {id} = req.params
  const school = await schoolsService.show(id);
  return res.status(200).json(school)
};
const store = async (req, res) => {
  const storedSchool = await schoolsService.store(req.body);
  return res.status(201).json(storedSchool)
};
const update = async (req, res) => {
  const {id} = req.params
  const updatedId = await schoolsService.update(id, req.body);
  return res.status(200).json(updatedId)
};
const remove = async (req, res) => {
  const {id} = req.params
  const removedId = await schoolsService.remove(id);
  return res.status(200).json(removedId)
}

module.exports = {
  index,
  show,
  store,
  update,
  remove,
}