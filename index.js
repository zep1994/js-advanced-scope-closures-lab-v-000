function produceDrivingRange(blockRange) {
  return function(starting, ending) {
    //parseInt() function parses a string argument and returns an integer of the specified radix
    let distance = Math.abs(parseInt(ending) - parseInt(starting));
    if (distance > blockRange){
      return `${distance - blockRange} blocks out of range`;
    } else {
      return `within range by ${blockRange - distance}`
    }
  }
}

// produceTipCalculator() - Returns a function
//  that then calculates a tip. For example,
//  produceTipCalculator(.10) returns a function
//  that calculates ten percent tip on a fare.
//   produceTipCalculator(.20) returns a function that
//   calculates twenty percent tip on a fare.

function produceTipCalculator(tip) {
  return function(fare) {
    return fare * tip;
  }
}

//wrap this to encapsulate the code
function createDriver() {
  let driverId = 0;

  return class {
    constructor(name) {
      this.name = name;
      this.id = ++driverId;
    }
  }
}
