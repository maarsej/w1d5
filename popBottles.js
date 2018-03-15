var dollars = process.argv.splice(2);

//cost 2$ per bottle
//every 2 bottles = 1 free bottle
//every 4 caps = 1 free bottle

dollars = Number(dollars);
var bottlesPurchased = (dollars - (dollars % 2))/2;
var change = dollars % 2;

var bottlesEarnedcap = 0;
var bottlesEarnedbot = 0;
var bottlesExchangeable = bottlesPurchased;
var bottleCaps = bottlesPurchased;
console.log(bottlesExchangeable);


while (bottlesExchangeable >=2 || bottleCaps >=4){
  //console.log('start of iteration');
  if (bottleCaps>=4){
    //console.log(bottleCaps+"  cap    "+bottlesEarnedcap);
    bottlesEarnedcap += 1;
    bottlesExchangeable +=1;
    bottleCaps -=3;
    //console.log(bottleCaps+"   cap   "+bottlesEarnedcap);
  }
  if (bottlesExchangeable>=2){
    //console.log(bottlesExchangeable+"   bottle   "+bottlesEarnedbot);
    bottlesEarnedbot +=1;
    bottlesExchangeable -= 1;
    bottleCaps +=1;
    //console.log(bottlesExchangeable+"   bottle   "+bottlesEarnedbot);
  }
}

result = bottlesPurchased + bottlesEarnedbot + bottlesEarnedcap;
console.log('TOTAL BOTTLES:'+result);
console.log('REMAINING CAPS: '+bottleCaps);
console.log('REMAINING BOTTLES: '+bottlesExchangeable);
console.log('Total Earned: ' + '\n' + '    Bottles: '+bottlesEarnedbot + '\n'+'    Caps: '+  bottlesEarnedcap+ '\n' + 'Change: $'+change);