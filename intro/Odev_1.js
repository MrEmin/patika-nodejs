const arguments = process.argv.slice(2)
let r;

function alanHesaplama(r, pi = 3.14) {
    let alan = pi * r * r;
    console.log(`Yarıçapı ${r} olan dairenin alanı: ${Number(alan.toFixed(2))}`);
}

alanHesaplama(arguments[0] * 1)