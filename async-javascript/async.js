function getData(data) {
    return new Promise((resolve, reject) => {
        console.log("Veriler alınmaya çalışılıyor..");
        if(data) {
            resolve("Veriler alındı")
        } else{
            reject("Veriler alınmadı")
        }
    })
}

function cleanData(receivedData) {
    return new Promise((resolve, reject) => {
        console.log("Veriler düzenleniyor..");
        if(receivedData) {
            resolve("Veriler düzenlendi")
        } else{
            reject("Veriler düzenlenemedi")
        }
    })
}

/*
getData(true)
    .then(result => {
        console.log(result);
        return cleanData(false)
    }).then(result => {
        console.log(result);
    }).catch(error => {
        console.log(error);
    })
*/

// Async - Await

function processData() {
    
