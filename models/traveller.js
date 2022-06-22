const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
  const startLocs = [];
  this.journeys.forEach((journey) => {
    startLocs.push(journey.startLocation)
  });
  return startLocs;
};

Traveller.prototype.getJourneyEndLocations = function () {
  return this.journeys.map((journey)=>{
    return journey.endLocation
  })
};

Traveller.prototype.getJourneysByTransport = function (transport) {
  return this.journeys.filter(journey => journey.transport === transport)
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  return this.journeys.filter(journey => journey.distance > minDistance)
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
  return this.journeys.reduce((total, journey) => {
    return total += journey.distance
  },0)
};

Traveller.prototype.getUniqueModesOfTransport = function () {
  return this.journeys.map(journey => journey.transport)
  .filter((value, index, self) => self.indexOf(value) === index)
};


module.exports = Traveller;
