//OBJEK LITERAL

let mahasiswa = {
    nama : 'Joseph Joestar',
    usia : 21,
    energi : 10,
    makan : function(porsi) {
        this.energi = this.energi + porsi;  
        console.log(`halo ${this.name}, selamat makan`); 
    }
}

//FUNCTION DECLARATION