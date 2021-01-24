// //merubah function menjadi arrow
// //CONTOH 1
// function sum(a,b) {
//     return a+b
// }
// //Menjadi seperti dibawah
// let sum = (a,b) => a+b
// //boleh tanpa RETURN jika satu baris maka sudah dianggap return





// //CONTOH2
// function IsPositive(number) = {
//     return number >= 0
// }
// //menjadi seperti dibawah
// //tidak pakai kurung bisa jika 1 parameter
// let IsPositive = number => number >= 0 







//CONTOH 3 
//Keunggulan menggunakan arrow function

// class Person {
//     constructor(name) {
//         this.name = name
//     }

//     printNameArrow() {
//         setTimeout(() => {
//             console.log('Arrow :' + this.name)
//         }, 100)
//     }

//     printNameFunction() {
//         setTimeout(function(){
//             console.log('Function :' + this.name)
//         }, 100)
//     }
// }

// let person = new Person('Bob')
// person.printNameArrow()
// person.printNameFunction()
// console.log(this.name)







// Contoh SOAL
// let mahasiswa = ['farid','nasi','udin'];

//Versi F
// let jumlahhuruf = mahasiswa.map(function (nama) {
//     return nama.length;
// });
//Versi AF
// let jumlahhuruf = mahasiswa.map(nama => nama.length);

// console.log(jumlahhuruf);


//Versi lebih rumit
// let jumlahhuruf = mahasiswa.map(nama => ({nama: nama, jmlhuruf: nama.length }))
// console.table(jumlahhuruf);
 