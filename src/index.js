module.exports = function getZerosCount(number, base) {
  // your implementation
  var number, base;
  let primeNum = base;
  let powerOfNum = 0;
  let numberOfZero = number;

  for (let i = 2; i < base + 1; i++) {
    if (primeNum % i == 0) {
      powerOfNum = 0;
      while (primeNum % i == 0) {
        powerOfNum++;
        primeNum = Math.floor(primeNum / i);
      }
      let count = 0;
      let k = number;
      //let num =k/i;
      while (k / i > 0) {
        count += Math.floor(k / i);
        k = Math.floor(k / i);
      }
      numberOfZero = Math.min(numberOfZero, count / powerOfNum);

    }
    numberOfZero = Math.floor(numberOfZero);
  }
  return numberOfZero;

}