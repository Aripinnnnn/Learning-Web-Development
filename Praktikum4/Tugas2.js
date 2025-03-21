const penjumlahan = document.getElementById("penjumlahan");
const pengurangan = document.getElementById("pengurangan");
const perkalian = document.getElementById("perkalian");
const pembagian = document.getElementById("pembagian");
const modulus = document.getElementById("modulus");

const tambah = ()=>{
    let first = prompt("Masukan angka Pertama");
    let second = prompt("Masukan angka kedua");
    alert(Number(first)+ Number(second));
}

const kurang = ()=>{
    let first = prompt("Masukan angka Pertama");
    let second = prompt("Masukan angka kedua");
    alert(Number(first) - Number(second));
}

const kali = ()=>{
    let first = prompt("Masukan angka Pertama");
    let second = prompt("Masukan angka kedua");
    alert(Number(first) * Number(second));
}

const bagi = ()=>{
    let first = prompt("Masukan angka Pertama");
    let second = prompt("Masukan angka kedua");
    alert(Number(first) / Number(second));
}

const mod = ()=>{
    let first = prompt("Masukan angka Pertama");
    let second = prompt("Masukan angka kedua");
    alert(Number(first) % Number(second));
}

penjumlahan.addEventListener('click', tambah);
pengurangan.addEventListener('click', kurang);
perkalian.addEventListener('click', kali);
pembagian.addEventListener('click', bagi);
modulus.addEventListener('click', mod);