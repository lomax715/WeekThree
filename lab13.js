// 'use strict';

// //let numArray = ['0','1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19'];

// // funtion getRandom(numArray) {
// //     return Math.random();
// // }

// function myFunction() {
//     var x = Math.floor((Math.random() * 10) + 1);
// }

// // adding notes so i can push correctly

const randomProduct = products[Math.floor(Math.random() * products.length)];
// this will create a random image
if (tempArray.includes(randomProduct)) {
    i = i - 1;
}
else {
    const randomProductEle = randomProduct.render();
    select.appendchild(randomProductEle);
    randomProduct.wasDisplayed();
    tempArray.push(randomProduct);
}