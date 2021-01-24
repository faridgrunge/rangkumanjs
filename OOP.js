//              //OBJEK LITERAL
// let mahasiswa = {
//     nama : 'Joseph Joestar',
//     usia : 21,
//     energi : 10,
// //(membuat method, fungsi didalam objek)
//     makan : function(porsi) {
//         this.energi = this.energi + porsi;  
//         console.log(`halo ${this.name}, selamat makan`); 
//     }
// }






//              //FUNCTION DECLARATION
// function Mahasiswa(nama, energi) {
// //dideklarasikan dlu klo mau buat objek kosong
//     let mahasiswa = {};
// //buat properti sesuai parameter
//     mahasiswa.nama = nama;
//     mahasiswa.energi = energi;   

//     mahasiswa.makan = function(porsi) {
//         this.energi += porsi;
//         console.log(`halo ${this.nama}, selamat makan`);
//     }
// //kalo buat function declaration wajib return
//     return mahasiswa;
// }
// //klo diconsole log kluar fungsi, bukan objek
// //klo buat objek, bikin dulu variabel yg manggil function
// let farid = Mahasiswa('farid', 20);
// //coba ke console click "farid"/"farid.makan"







//         //CONSTRUCTOR FUNCTION
// function Mahasiswa(nama, energi) {
// //fungsi construction tidak perlu deklarasi variabel
// //let mahasiswa = {};  
//         this.nama = nama;
//         this.energi = energi;   
    
//         this.makan = function(porsi) {
//             this.energi += porsi;
//             console.log(`halo ${this.nama}, selamat makan`);
//         }
// //fungsi construction tidak perlu return
// //        return mahasiswa;
//     }
// //gapake deklarasi variabel, gapake return tapi tambahi NEW
// //jika tidak pakai new maka akan mencari deklarasi variabel dan return sehingga undefined
//     let farid = new Mahasiswa('farid', 20);






//CONTOH 1
// let name = "Joni";
// let age = 19;
// let address = "London";

// function displayPerson () {
//   console.log(`His name is ${name}, he is ${age} years old, he lives in ${address}`)
// }

// function displayName(){
//   console.log(`His name is ${name}`)
// }

// console.log(displayPerson())
// console.log(displayName())







// let person = {
//   name: "Dio Brando",
//   age: 100,
//   address: "Egypt",
//   displayPerson: function(){
//     return `His name is ${this.name}, he is ${this.age} years old, he lives in ${this.address}`
//   },
//   displayName: function(){
//     return `His name is ${this.name}`
//   }
// }

// person.displayName()
// console.log(person.name)
// console.log(person.displayPerson())
// console.log(person.displayName())






let pengguna = {
    nama : 'farid',
    usia : 23,
    email : 'faridgrunge@gmail.com',
    artikel : ['7 tips sehat','buku ternak lele'],
    login : function() {
        console.log('anda login btw');
    },
    logout : function() {
        console.log('anda logout')
    }
};

pengguna.login()
console.log(pengguna.artikel[2])

