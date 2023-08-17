// Math - ROUND
const a = 4.6;
document.getElementById("round").innerHTML = "Hasil = " + Math.round(a);
// result
// 5

// MATH - CEIL
const b = 9.1;
const c = 4.4;
const d = -4.4;
document.getElementById("ceil1").innerHTML = "Hasil = " + Math.ceil(b);
document.getElementById("ceil2").innerHTML = "Hasil = " + Math.ceil(c);
document.getElementById("ceil3").innerHTML = "Hasil = " + Math.ceil(d);
// result
// Hasil = 10;
// Hasil = 5;
// Hasil = -4;

// MATH - FLOOR - pembulatan kebawah
var e = 4.9;
var f = 4.4;
var g = -4.2;
var h = 9.966461;
document.getElementById("floor1").innerHTML = "Hasil = " + Math.floor(e);
document.getElementById("floor2").innerHTML = "Hasil = " + Math.floor(f);
document.getElementById("floor3").innerHTML = "Hasil = " + Math.floor(g);
document.getElementById("floor4").innerHTML = "Hasil = " + Math.floor(h);
// result
// Hasil = 4;
// Hasil = 4;
// Hasil = -5;
// Hasil = 9

var i = 9.9;
var j = 9.5;
var k = 8.2;
document.getElementById("trunc1").innerHTML = "Hasil = " + Math.trunc(i);
document.getElementById("trunc2").innerHTML = "Hasil = " + Math.trunc(j);
document.getElementById("trunc3").innerHTML = "Hasil = " + Math.trunc(k);
// result
// Hasil = 9;
// Hasil = 9;
// Hasil = 8;

// MATH POW -
var l = 8;
var m = 2;
var n = 3;
document.getElementById("pow1").innerHTML = "Hasil = " + Math.pow(l, m);
document.getElementById("pow2").innerHTML = "Hasil = " + Math.pow(n, m);
document.getElementById("pow3").innerHTML = "Hasil = " + Math.pow(l, n);
//result
// Hasil = 64;
// Hasil = 9;
// Hasil = 512;

// MATH - SQRT / EXPONENTS and Roots OF
var o = 20;
var p = 2;
var q = Math.pow(o, p);
document.getElementById("sqrt1").innerHTML = "Hasil = " + Math.sqrt(q);

// MATH MIN - smallest value
let r;
r = Math.min(5, 15, 20, 8, 9, 7);
document.getElementById("min1").innerHTML = "Hasil = " + Math.min(r);
// MATH MAX - biggest value
let s;
s = Math.min(5, 15, 20, 8, 9, 7);
document.getElementById("max1").innerHTML = "Hasil = " + Math.min(s);
