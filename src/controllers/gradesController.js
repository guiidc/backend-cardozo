const gradeService = require('../services/gradesService');

const index = async (_req, res) => {
  const list = await gradeService.index();
  return res.status(200).json(list)
};
const show = async (req, res) => {
  const {id} = req.params
  const school = await gradeService.show(id);
  return res.status(200).json(school)
};
const update = async (req, res) => {
  const {id} = req.params
  const updatedId = await gradeService.update(id, req.body);
  return res.status(200).json(updatedId)
};
const remove = async (req, res) => {
  const {id} = req.params
  const removedId = await gradeService.remove(id);
  return res.status(200).json(removedId)
}

module.exports = {
  index,
  show,
  update,
  remove,
}