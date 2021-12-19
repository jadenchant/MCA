import fetch from './node_modules/node-fetch/src/index.mjs';

fetch("https://rab.com/try.html")
  .then (resolve => resolve.text())
  .then (val => {
    val.replace(/stolaf+/g, "Olaf");
    console.log(val);
  })
  .catch(reject => {console.log("ERROR");});