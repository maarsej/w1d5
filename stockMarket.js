var input =  [45, 24, 35, 31, 40, 38, 11];
// var input = [100,90,80,70,60,50];

function valleys(location){
  if (location == 0){
    if (input[location] < input[location+1]){
      return location;
    }
  }
 else if (location === input.length - 1){
    if (input[location]<input[location-1]){
      return location;
    }
  }
  else {
    if (input[location]<input[location-1]&&input[location]<input[location+1]){
      return location;
    }
  }
}


function peaks(location){
  if (location == 0){
    if (input[location]>input[location+1]){
      return location;
    }
  }
  else if (location === input.length - 1){
    if (input[location]>input[location-1]){
      return location;
    }
  }
  else {
    if (input[location]>input[location-1]&&input[location]>input[location+1]){
      return location;
    }
  }
}



function waveSearch(typeSearch){
var arrayOfIndexes = [];
  for (i = 0; i < input.length; i++){
    if (typeSearch(i) !== undefined){
      arrayOfIndexes.push(typeSearch(i));
    }
  }
  return arrayOfIndexes;
}

peaksIndex = waveSearch(peaks);
valleysIndex = waveSearch(valleys);

// console.log("peaks:",peaksIndex);
// console.log("valleys:",valleysIndex);


function maxProfit (peaksIndex, valleysIndex){
  var profit = -1;
  var buy;
  var sell;
  for (i = 0; i < peaksIndex.length; i++){
    for (j = 0; j <valleysIndex.length; j++){
      if (valleysIndex[j]<peaksIndex[i]){
        var diff = input[peaksIndex[i]]-input[valleysIndex[j]];
        if (diff > profit){
          profit = diff;
          buy = input[valleysIndex[j]];
          sell = input[peaksIndex[i]];
        }
      }
    }
  }
  if (profit <= 0){
    console.log("No profit could be made today", profit);
    return;
  }
  else {
    console.log(`Max Profit today is ${profit} when buying at ${buy} and selling at ${sell}`);
  }
}


maxProfit(peaksIndex,valleysIndex);







