// console.log("1. görev");
// console.log("2. görev");
// console.log("3. görev");

/*
const func1 = () => {
    console.log("Func 1 tamamlandı");
}

const func2 = () => {
    console.log("Func 2 tamamlandı");
}


func2();
func1();
*/

/*
const func1 = () => {
    console.log("Func 1 tamamlandı");
    func2();
}

const func2 = () => {
    console.log("Func 2 tamamlandı");
    func3();
}

const func3 = () => {
    console.log("Func 3 tamamlandı");
}

func1()
*/

/*
const func1 = () => {
    console.log("Func 1 tamamlandı");
    func3();
}

const func2 = () => {
    console.log("Func 2 tamamlandı");
}

const func3 = () => {
    console.log("Func 3 tamamlandı");
    func2();
}

func1();
*/

// Javascript'in kendisi her zaman senkron çalışır. Ve single thread olarak çalışır. Single thread, aynı anda tek bir işlem yapabilir. Tek çalışan bir işçi gibi. 

// Buraya kadar ki örneklerin hepside senkrondu.

// Javascript'in manipüle edilerek çalışmasına asenkron denir. Arkaplanda yine senkron çalışır ama bize asenkron gibi gözükür.

// Uzun süren işlemleri beklemek yerine callback, promise, async, await kullanarak js kodunu manipüle ederek asenkron davranışlar elde etmek isteriz.

/*
let x = 5;
console.log("1. veri", x);

setTimeout(() => {
    x = x + 5;
    console.log("2. veri", x);
}, 2000);

// console.log, setTimeout fonksiyonu içerisinde bir callback fonksiyonu işlevi görür.

x = x + 5;
console.log("3. veri", x);
*/

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

const addBook = (newBook, callback) => {
    books.push(newBook);
    callback()
}

//listBooks();

addBook({name: 'Kitap 4', author: 'Yazar 4'}, listBooks)

// Yeni kitap eklediğimizde callback parametresini de ekleyerek, kütüphaneye yeni kitap eklendiğinde otomatik olarak listelenen kitapların içerisinde bulunmasını sağlarız.