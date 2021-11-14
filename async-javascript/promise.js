/*
const promise1 = new Promise((resolve, reject) => {
    resolve("Veriler Alındı");
    reject("Bağlantı Hatası");
});

//console.log(promise1);

promise1
    .then(value => {
        console.log(value);
    }).catch(error => {
        console.log(error);
    });
*/

// Promise, bir işlemin sonucunu temsil eden bir Javascript nesnesidir.

// Promise nesnesi Resolve ve Reject adında iki tane parametre alır ve olumlu durumlarda Resolve ile belirtilen işlemlerin, olumsuz durumlarda da Reject ile belirtilen işlemlerin yapılacağına dair güvence verir.

// Promise yapısı olumlu sonuçları .then(), olumsuz sonuçları da .catch() ile karşılar. 

// Resolve ve reject aynı anda olursa, ilk hangi durumu yakalarsa sonuç o olur. Örnek => Veriler Alındı

const books = [
    {name: 'Kitap 1', author: 'Yazar 1'},
    {name: 'Kitap 2', author: 'Yazar 2'},
    {name: 'Kitap 3', author: 'Yazar 3'}
];

const listBooks = () => {
    books.map(book => {
        console.log(book.name);
    })
};

// Callback'in promise versiyonu.
const addBook = (newBook) => {

    const promise1 = new Promise((resolve, reject) => {
        books.push(newBook);
        //resolve(books);
        reject("Bir Hata Oluştu");
    })
    return promise1;
}

addBook({name: 'Kitap 10', author: 'Yazar 10'})
    .then(() => {
        console.log("Yeni Liste");
        listBooks();
    }).catch((error) => {
        console.log(error);
    })