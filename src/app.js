/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const excuse = document.querySelector("#excuse");
window.onload = function() {
  excuse.innerHTML = `${getValue(arr)} ${getValue(arr1)} ${getValue(arr2)}`;
};

const arr = ["Un perro", "Un gato", "Un caballo", "Mi vecino"];
const arr1 = ["comio", "mordio", "quemo", "llevo"];
const arr2 = ["mi movil", "mi libro", "mi coche", "mis llaves"];

const getRandom = arra_y => Math.floor(Math.random() * arra_y.length);
const getValue = arra_y => arra_y[getRandom(arra_y)];

console.log(getRandom(arr));
console.log(getRandom(arr1));
console.log(getRandom(arr2));
