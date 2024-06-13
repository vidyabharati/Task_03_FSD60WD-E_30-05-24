//Task_03_FSD60WD-E_30-05-24
//Task_01_FSD60WD-E_28-05-24-JS array &amp; objects

//Question 1) How to compare two JSON have the same properties without order?
var obj1 = { name: "Person 1", age: 5 };
var obj2 = { age: 5, name: "Person 1" };
Answer: var obj1 = { name: "Person 1", age: 5 };
var obj2 = { age: 5, name: "Person 1" };
//compare the two object
const hasSameDataObj = function (obj1, obj2) {
  let obj1Keys = Object.keys(obj1);
  if (obj1Keys.length === Object.keys(obj2).length) {
    return obj1Keys.every(
      (key) => obj2.hasOwnProperty(key) && obj2[key] === obj1[key]
    );
  }
  return false;
};
console.log(hasSameDataObj(obj1, obj2));

//Question 2) Use the rest countries API url -> https://restcountries.eu/rest/v2/all and display all the country flags in console
Answer: var xhr = new XMLHttpRequest();
xhr.open(
  "GET",
  "https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json"
);
xhr.send();
xhr.onload = function () {
  if (xhr.status >= 200 && xhr.status < 300) {
    var data = JSON.parse(xhr.response);
    // console.log(data);
    for (var i = 0; i < data.length; i++) {
      console.log(data[i].flag);
      // console.log(data[i].email);
    }
  }
};

//Question 3) Use the same rest countries and print all countries name, region, sub region and population
Answer: var xhr = new XMLHttpRequest();
xhr.open(
  "GET",
  "https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json"
);
xhr.send();
xhr.onload = function () {
  if (xhr.status >= 200 && xhr.status < 300) {
    var data = JSON.parse(xhr.response);
    // console.log(data);
    for (var i = 0; i < data.length; i++) {
      console.log(data[i].name);
      console.log(data[i].region);
      console.log(data[i].subregion);
      console.log(data[i].population);
    }
  }
};
