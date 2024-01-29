
function isPrime(number) {
    if (number <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
}


function findLargestPrimeSmallerThan(limit) {
    for (let number = limit; number >= 2; number--) {
        if (isPrime(number)) {
            return number;
        }
    }
    return 2; 
}


function findSmallestPrimeGreaterThan(limit) {
    for (let number = limit;; number++) {
        if (isPrime(number)) {
            return number;
        }
    }
}


function calculateDifference() {
    const smallPrineNum = findLargestPrimeSmallerThan(500000);
    const largePrimeNum = findSmallestPrimeGreaterThan(500000);

    const difference = largePrimeNum - smallPrineNum;

 
    console.log("500.000'den küçük en büyük asal sayı: " + smallPrineNum);
    console.log("500.000'den büyük en küçük asal sayı: " + largePrimeNum);
    console.log("İki asal sayı arasındaki fark: " + difference);
}


calculateDifference();