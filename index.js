const categoriesData = require("./categoriesData.js");

let fs = require('fs');
const randomOffset = Math.floor(Math.random() * 18419);
// console.log(randomOffset);
const categoryURI = "http://jservice.io/api/categories?count=100&offset=";


let data = categoriesData(categoryURI + randomOffset);
data.then (response => {
    fs.writeFile('writeMe.txt', response, (err) => {
        console.log("data being written");
        if (err) throw err;
        // console.log('The file has been saved!');
      });
})