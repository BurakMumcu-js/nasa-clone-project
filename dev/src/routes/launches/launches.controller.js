const {getAllLaunches, addNewLaunch, existsLaunchWithId, abortLaunchById} = require('../../models/launches.model');

const httpGetAllLaunches = (req, res) => res.status(200).json(getAllLaunches())

function httpAddNewLaunch(req, res) {
    const launch = req.body

    if (!launch.mission || !launch.rocket || !launch.launchDate ||
        !launch.target) {
        return res.status(400).json({
            error: 'Missing required launch property'
        })
    }

    launch.launchDate = new Date(launch.launchDate);
    if (isNaN(launch.launchDate)) {
        return res.status(404).json({
            error: 'Invalid launch date'
        })
    }
    addNewLaunch(launch);
    return res.status(201).json(launch);
}

function httpAbortLaunch(req, res) {
    const launchId = Number(req.params.id);
    if (existsLaunchWithId(launchId)) {
        const aborted = abortLaunchById(launchId);

        return res.status(200).json(aborted);
    } else {
        return res.status(404).json({
            error: 'launch not found'
        })
    }
}

/*function getAllLaunches(req,res){

    return res.status(200).json(Array.from(launches.values()))
} */

module.exports = {
    httpAbortLaunch,
    httpGetAllLaunches,
    httpAddNewLaunch,
}