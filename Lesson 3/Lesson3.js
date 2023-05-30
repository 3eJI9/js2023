// let arr = [14, 22, 13134, 567, 78, 89, 121, 14, 54];
//
// for (let temp of arr) {
//     console.log (temp);
//
// }
//


// let menuItems = [
//     'About',
//     'Blog',
//     'Info'
// ];
// document.write ('<ul>');
//
// for (let menuItem of menuItems) {
//
//     document.write (`<li>${menuItem}</li>`)
// }
//
// document.write ('</ul>')


let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true, surname: 'ausfyqf'},
];


// document.write (`<div class="users-box">`)
//
// for (let user of users) {
//     if (user.status) {
//
//         document.write (`<div> ${user.name} ${user.status} </div>`)
//     }
//
// }
//
// document.write (`</div>`)

//
// for (let i = 0; i < 11; i++) {
//     console.log (users.[i]);
//
// }

//ritar revers зворотній напрямок ціклічний
// for (let i = users.length - 1; i >= 0; i--) {
//     let user = users[i];
//     console.log(users[i]);
// }

// let person = { name: 'kolya', age: 29, status: true, work: Mjs};
//
// for (let personKey in person) {
//     console.log(personKey);
//
// }

let music = [
    ['queen', 'pink floyd'],  //0
    ['Eminem', '2pak', '50 cent'], //1
    ['Bionce', 'Aguilera', 'Riana', 'Grande'] //2
];


// for (let i = 0; i < music.length; i++) {
//     const folder = music[i];
//     console.log (folder);
//     for (let j = 0; j < folder.length; j++) {
//         const folderElement = folder[j];
//         console.log (folderElement);
//
//     }
//
// }


// let i = 0;
// while (i < users.length) {
//     console.log (users[i]);
//     i++;
//
// }

// 1. Print in console all numbers from 1 to 100;
// тут від 1 чи від 1 значення? Дав 1 так як зрозумів ( буквально ) В загальному стартуємо переважно від 0
// for (let i = 1; i <= 100; i++) {
//     console.log(i);
// }
//
//або
//
// let i = 1;
//
// while (i <= 100) {
//     console.log(i);
//     i++;
// }

//
// 2. Print in console all numbers from -100 to 1;
//
// for (let i = -100; i <= 1; i++) {
//     console.log(i);
// }
//
// let i = -100;
//
// while (i <= 1) {
//     console.log(i);
//     i++;
// }
//

// 3. Print in console all even numbers from 1 to 52;

// for (let i = 2; i <= 52; i += 2) {
//     console.log (i);
//
// }
//
// let i = 2;
// while (i <= 52) {
//     console.log (i);
//     i += 2;
// }
// 4. Revert number "12345" to "54321"
// let number = 12345;
// let numberString = String(number);
// let reversedNumber = '';
//
// for (let i = numberString.length - 1; i >= 0; i--) {
//     reversedNumber += numberString[i];
// }
//
// console.log(reversedNumber);//в цьому завданні не розумів як це перевести/ бо працювали з масивом і його не потрібно було переводити в стрінгу


// 5. Find sum of all the numbers in array [1.456, 2.125, 3.32, 4.1, 5.34];

// let numbers = [1.456, 2.125, 3.32, 4.1, 5.34];
// let sum = 0;
//
// for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i];
// }
//
// console.log(sum);


// 6. Add 2 to each number in the array and print the result; let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

//
// }
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// for (let i = 0; i < arr.length; i++) {
//     arr[i] += 2;
//     console.log ([i]);
//
// }
//

// 7. Use 'while' instead of the 'for' in this example: for (let i = 0; i < 5; i++) {   console.log( number ${i}! ); }

// let i = 0;
// while (i < 5) {
//     console.log (` Номер ${i} !!!!`);
//     i++;
// }
// 8. Use “switch” to print “it’s a summer/winter, spring, autumn “ depends on the key “period” in the obj = { period: “winter”, data: “it’s a winter”}

// const obj = {
//     period: prompt("Введіть період (summer/winter/spring/autumn):"),
//     data: "it's a winter"
// };
//
// switch (obj.period) {
//     case "summer":
//         document.write("It's a summer");
//         break;
//     case "winter":
//         document.write("It's a winter");
//         break;
//     case "spring":
//         document.write("It's a spring");
//         break;
//     case "autumn":
//         document.write("It's an autumn");
//         break;
//     default:
//         document.write("Unknown period");
//         break;
// }
