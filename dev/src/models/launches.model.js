const launches = new Map();

let latestFlightNumber = 100;

const launch = {
    flightNumber: 100,
    mission: 'Kepler Exploration X',
    rocket: 'Explorer IS1',
    launchDate: new Date('December 27, 2030'),
    target: 'Kepler-442 b',
    customer: ['KLU', 'NASA'],
    upcoming: true,
    success: true,
};

launches.set(launch.flightNumber, launch);

function existsLaunchWithId(launchId) {
    return launches.has(launchId);
}

const getAllLaunches = () => Array.from(launches.values())

/*
function getAllLaunches () {
    return Array.from(launches.values())
} */

function addNewLaunch(launch) {
    latestFlightNumber += 1;
    launches.set(
        latestFlightNumber,
        Object.assign(launch, {
            success: false,
            upcoming: true,
            customer : ['GDG','Nasa'],
            flightNumber: latestFlightNumber,
        }));
}

function abortLaunchById(launchId){
   const aborted = launches.get(launchId);
    aborted.upcoming = false
    aborted.success = false
    return aborted;
}

module.exports = {
    abortLaunchById,
    existsLaunchWithId,
    getAllLaunches,
    addNewLaunch,
}
