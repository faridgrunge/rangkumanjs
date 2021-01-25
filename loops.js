/*
++++++++++PENGULANGAN : WHILE++++++++++++
    - Untuk melakukan hal yg sama berulang kali
    - Stuktur while :
                
        while(kondisi) {
                    aksi
                }
        (dibaca : selama kondisi while bernilai true, lakukan aksi)
*/ 

// CONTOH 1 : Infinity loops
        // while (true) {
        //     console.log(`Hello World!`);
        // }
// akan dicetak `Hello World!` sampai infinity loops

/*
        supaya tidak loop infinity harus dihentikan dgn program
        struktur :

            nilaiawal
            while(kondisi terminasi) {
                aksi

                increment/decrement
            }
*/

// CONTOH 2 : cetak sebanyak 100kali
            // var nilaiawal = 1;
            // while (nilaiawal <=100) {
            //     console.log(`Hello World!`);
            //     nilaiawal++;
            // }
// akan dicetak ``Hello World!` sebanyak 100 kali

// CONTOH 3 : cetak hello world 1x, hello world 2x, hello world 3x, dst
            // var nilaiawal = 1;
            // while (nilaiawal <= 10) {
            //     console.log(`Hello World` + nilaiawal + x);
            //     nilaiawal++
            // }

// CONTOH 4 : tabel penelusuran, cetak pesawat no 1-10 beroperasi dengan baik
            // var jmlPesawat = 10;
            // var noPesawat = 1;

            // while(noPesawat <= jmlPesawat) {
            //     console.log('Pesawat No.' + noPesawat + 'Beroperasi dengan baik');
            //     noPesawat++;
            // }
//Pengecekan dilakukan 11 kali dengan pengecekan ke-11 bernilai false karena tidak <= jmlPesawat

//CONTOH 5 : Penulisan lebih ringkas
            // for(var i = 1; i <= 10; i++){
            //     console.log('Hello World!');
            // }
//i adalah NilaiAwal

//Contoh 6 : Pesawat 1-6 beroperasi, pesawat 7-10 tidak beroperasi
            // var jmlPesawat = 10;
            // var pesawatBeroperasi = 6
            // var noPesawat = 1;

            // while (noPesawat <= pesawatBeroperasi) {
            //     console.log('Pesawat No.' + noPesawat + 'beroperasi dengan baik.');
                
            //     noPesawat++
            // }

            // for (noPesawat = pesawatBeroperasi + 1; noPesawat <= jmlPesawat; noPesawat++) {
            //     console.log('Pesawat No.' + noPesawat + 'sedang tidak beroperasi.');
            // }

/*
++++++++++PENGKONDISIAN : IF ELSE++++++++++++
    
    - Stuktur pengkondisian :
                
        if(kondisi) {
                    aksi1
                } else {
                    aks1
                }
        (dibaca : selama kondisi if bernilai true, lakukan aksi1, jika false lakukan aksi2)
*/

//CONTOH 7 : Seperti CONTOH 6 tapi hanya pakai for
            //     var jmlPesawat = 10;
            //     var pesawatBeroperasi = 6
            //     var noPesawat = 1;

            //     for (var noPesawat = 1; noPesawat <= jmlPesawat; noPesawat++) {
            //         if (noPesawat <= 6) {
            //             console.log('Pesawat no.' + noPesawat + ' beroperasi dengan baik.');
            //         } else {
            //             console.log('Pesawat no.' + noPesawat + ' sedang tidak beroperasi.');
            //         }

            // }

//CONTOH 8 : sama seperti soal nomor 7 tapi pesawat no 8 & 10 lembur
                // var jmlPesawat = 10;
                // var pesawatBeroperasi = 6
                // var noPesawat = 1;

                // for (var noPesawat = 1; noPesawat <= jmlPesawat; noPesawat++) {

                //     if (noPesawat <= 6) {
                //         console.log('Pesawat no.' + noPesawat + ' beroperasi dengan baik.');
                //     } else if(noPesawat === 8 || noPesawat === 10) {
                //         console.log('Pesawat no.' + noPesawat + ' sedang lembur');
                //     } else {
                //         console.log('Pesawat no.' + noPesawat + ' sedang tidak beroperasi.');
                //     }

                // }

//CONTOH 9a  : Membuat bintang bersusun segitiga
                // var s = '';
                // for ( var i = 0; i < 10; i++) {
                //     for ( var j = 0; j <= i; j++){
                //         s += '*';
                //     }
                //     s += '\n';
                // }
                // console.log(s);

//CONTOH 9b : Membuat bintang bersusun segitiga terbalik
                // var s = '';
                // for ( var i = 10; i > 0; i--) {
                //     for ( var j = 0; j < i; j++){
                //         s += '*';
                //     }
                //     s += '\n';
                // }
                // console.log(s);

/*
++++++++++ FUNCTION ++++++++++++
    - Sebuah sub-program yang dapat dipanggil dibagian lain di program
    - Struktur pembentuk javascript
    - Kumpulan statement untuk melakukan tugas
    - Cara pakai : dibuat lalu dipanggil
    - Function ada 2 mcm : Deklarasi / ekspresi
    - cth deklarasi : function jumlahduabilangan(a,b) {
                        var total;
                        total = a + b;

                        return total;
                        }
    - cth ekspresi : var jumlahduabilangan = function(a,b) {
                        var total;
                        total = a + b;

                        return total;
                    }
*/ 

//CONTOH 10 : Fungsi penjumlahan volume 2 kubik
                function volumeKubik(a,b) {
                    volumeA = a * a * a;
                    volumeB = b * b * b;

                    total = volumeA + volumeB;

                    return total;
                }

                console.log(volumeKubik(8,3));

/* parameter : digunakan untuk menampung nilai 
   argument : nilai yang dikirim ke parameter saat fungsi dipanggil
*/

//CONTOH 11 : 

