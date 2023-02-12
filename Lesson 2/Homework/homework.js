// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - масив. Кожен автор має поля name,age
// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача


// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль

// let myArray = [1, 'two', true, null, undefined, 'Luzia', 25, 'Inke', 123, false]
// console.log (myArray);


//- Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.

// let book1 = {
//     title: "The Great Gatsby",
//     pageCount: 218,
//     genre: "Fiction"
// };
//
// let book2 = {
//     title: "The Black Swan",
//     pageCount: 698,
//     genre: "Economic"
// };
//
// let book3 = {
//     title: "Atlas Shrugged",
//     pageCount: 1088,
//     genre: "Contemporary Literature & Fiction"
// };

//
// console.log (book1, book2, book3);


// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - масив. Кожен автор має поля name,age
//
// let book1 = {
//     title: "The Great Gatsby",
//     pageCount: 218,
//     genre: "Fiction",
//     authors: [
//         {name: "F. Scott Fitzgerald", age: 46}
//     ]
// };
//
// let book2 = {
//     title: "The Black Swan",
//     pageCount: 698,
//     genre: "Economic",
//     authors: [
//         {name: "F. Scott Fitzgerald", age: 44}
//     ]
// };
//
// let book3 = {
//     title: "Atlas Shrugged",
//     pageCount: 1088,
//     genre: "Contemporary Literature & Fiction",
//     authors: [
//         {name: "Ayn Rand", age: 77}
//     ]
// };
//
//
// console.log (book1, book2, book3);


//Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача


let users = [
    {name: "Susanne Muller", username: "Luzia", password: "rrefd342D23"},
    {name: "Karol Hernias", username: "Hermes", password: "he832ms"},
    {name: "Jo Jung", username: "Jung", password: "hdshi21"},
    {name: "Kristina Vox", username: "KristiVox", password: "voxi123"},
    {name: "Ben Oneal", username: "Oneal", password: "secret"},
    {name: "Karol Walk", username: "Woolly", password: "325dssd1"},
    {name: "Petter Son", username: "Peterson", password: "pass12ew323"},
    {name: "Mickael Grand", username: "Grand", password: "sec32ret"},
    {name: "Pol Line", username: "Linker", password: "p32ds c23"},
    {name: "Lily Lama", username: "LAMA", password: "pew32ds 324we"},

];


users.forEach (user => {
    console.log (user.password);
});

