function isPrime(x) {


    const primeArray = [];
    for (var i = 1; i <= x; i++) {
        if (x % i === 0) {
            primeArray.push(i)
        }
    }
    if (primeArray.length === 2) {
        return true;
    } else return false;
}
function primeNumbersFromInterval(n) {
    if (n <= 2 || typeof n !== 'number'){
        return "Input Error"
    }
    let arrrayOfPrimeNumbers = [];
    for(let i = 2;i<=n;i++){
        if (isPrime(i))
        arrrayOfPrimeNumbers.push(i);
    }
  return arrrayOfPrimeNumbers;
}


console.log(primeNumbersFromInterval("sd"));
console.log(primeNumbersFromInterval(1));
console.log(primeNumbersFromInterval(11));
console.log(primeNumbersFromInterval(121));
console.log(primeNumbersFromInterval(144));
console.log(primeNumbersFromInterval(120));