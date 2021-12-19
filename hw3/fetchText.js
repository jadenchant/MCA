import fetch from './node_modules/node-fetch/src/index.mjs';

fetch("https://www.stolaf.edu/people/rab/mca/try.txt2").
  then (resolve => resolve.text()).
  then (val => {console.log(val);}).
  catch(reject => {console.log("ERROR");});