//Problem-01: Match Winner
function matchWinner(teamAGoals, teamBGoals) {
  // Write your code here…
  if (typeof teamAGoals !== "number" || typeof teamBGoals !== "number") {
    return "Invalid";
  }

  if (teamAGoals > teamBGoals) {
    return "Team A Won";
  } else if (teamAGoals < teamBGoals) {
    return "Team B Won";
  } else if (teamAGoals === teamBGoals) {
    return "Draw";
  }
}

//Problem-02: Elevator Weight Safety Checker
function isElevatorSafe(weights) {
  // Write your code here
  if (!Array.isArray(weights)) {
    return "Invalid";
  }

  let totalWeight = 0;
  for (let weight of weights) {
    totalWeight += weight;
  }

  if (totalWeight <= 400) {
    return true;
  } else {
    return false;
  }
}

//Problem-03: AI Token Cost Calculator
function calculateAiCost(tokensUsed) {
  // Write your code here.
  if (typeof tokensUsed !== "number" || tokensUsed < 0) {
    return "Invalid";
  }
  let freeToken = 500;
  let ratePerHundred = 5;

  let countToken = tokensUsed - freeToken;
  let fullToken = Math.floor(countToken / 100);

  if (fullToken > 0) {
    let totalCost = fullToken * ratePerHundred;
    return totalCost;
  } else {
    return 0;
  }
}

//Problem-04: Top Rated Restaurant Finder
function topRatedRestaurant(restaurants) {
  // Write your code
  // checking
  if (!Array.isArray(restaurants) || restaurants.length === 0) {
    return "Invalid";
  }

  let maxRating = restaurants[0];

  for (let i = 1; i < restaurants.length; i++) {
    if (restaurants[i].rating > maxRating.rating) {
      maxRating = restaurants[i];
    }
  }

  return maxRating.name.toUpperCase();
}

//Problem-05: Debugging Challenge - API Response Time Monitor
function averageResponseTime(times) {
  if (!Array.isArray(times)) {
    return "Invalid";
  }

  if (times.length === 0) {
    return "Invalid";
  }

  let total = times[0];
  for (let i = 1; i < times.length; i++) {
    if (typeof times[i] !== "number") {
      return "Invalid";
    }
    total += times[i];
  }

  return total / times.length;
}
