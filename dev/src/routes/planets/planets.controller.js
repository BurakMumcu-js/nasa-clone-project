const { getAllPlanets } = require('../../models/planets.model');

const httpGetAllPlanets = (req,res) => res.status(200).json(getAllPlanets());

/* function getAllPlanets (req,res) {
  return res.status(200).json(planets);
} */

module.exports = {
    httpGetAllPlanets,
}