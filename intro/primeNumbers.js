const arguments = process.argv.slice(2);

function showPrimeNumbers(lowNumber, highNumber) {
    for (let i = lowNumber; i <= highNumber; i++) {
        let isPrime = true;
        for (let j = 2; j < i; j++) {
            if( i % j === 0 && j !== i){
                isPrime = false
            }
        }
        if(isPrime == true && i > 1) {
            console.log(i);
        }
    }
}

// showPrimeNumbers(2, 22)
showPrimeNumbers(arguments[0] * 1 , arguments[1] * 1);
// console.log(process.argv.slice(2));

// Terminale node primeNumbers 2 11 yazarsak 2 ile 11 arasındaki asal sayıları döndürür. 1 ile çarpmamızın sebebi string'i sayıya çevirmektir.

// Parametre, fonksiyon yazımında kullanılan değerler. 
// Argüman ise fonksiyon çalıştırılırken kullanılan değerlerdir.