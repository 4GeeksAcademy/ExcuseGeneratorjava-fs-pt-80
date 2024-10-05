// Puedes revisar mas estricto

import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const excuse = document.querySelector("#excuse");
window.onload = function() {
  excuse.innerHTML = `${getValue(who)} ${getValue(action)} ${getValue(
    what
  )} ${getValue(when)}`;
};

const who = ["A dog", "A cat", "A horse", "My neighbour", "My boss"];
const action = ["ate", "bit", "burnt", "took", "threw"];
const what = ["my leg", "my book", "my car", "my keys", "my kids", "my money"];
const when = [
  "during my studies",
  "while I was eating",
  "when driving a car",
  "while having a beer"
];

const getRandom = array => Math.floor(Math.random() * array.length);
const getValue = array => array[getRandom(array)];

console.log(getRandom(who));
console.log(getRandom(action));
console.log(getRandom(what));
console.log(getRandom(when));
