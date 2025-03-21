//Inisialisasi variabel a dan b
let a = 0;
let b = 1;
//Cetak 0 dan 1
console.log(a);
console.log(b);
//For loop untuk mencetak deret Fibonacci
for(let i = 2; i <= 10;i++) {
  let hasil = a + b;
  console.log(hasil);
  a = b;
  b = hasil;
}