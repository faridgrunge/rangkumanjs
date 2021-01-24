const angka = [-1,8,9,1,4,-5,-4,3,2,9];

//Mencari angka lebih besar dari 3
//INI KALAU PAKAI FOR
// const newAngka = []
// for (let i=0; i<angka.length; i++) {
//     if (angka[i] >= 3) {
//         newAngka.push(angka[i])
//     }
// }

// console.log(newAngka);

//INI KALAU PAKAI FILTER
// const newAngka = angka.filter(function(i) {
//     return i >= 3;
// })

// console.log(newAngka)
//ATAU DIPERSINGKAT PAKAI ARROW FUNCTION
// const newAngka = angka.filter(i => i >= 3);
// console.log(newAngka);







//MAP
//contoh:mengalikan semua nilai di array x2
// const newAngka = angka.map(i => i*2);
// console.log(newAngka);
//coba cara function declaration
// const newAngka = angka.map(function(i){
//     return i * 3
// })
// console.log(newAngka)





//REDUCE 
//Menjumlahkan semua

// const newAngka = angka.reduce((a,b) => a+b)
// console.log(newAngka);





//Pakai chaining
//filter > 5 lalu kalikan 3 lalu jumlahkan semua

// const hasil = angka.filter(i => i > 5)
//     .map(i => i*3)
//     .reduce((a,b)=>a+b)

// console.log(hasil)