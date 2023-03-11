function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
}

// function shuffle(array) {
//     let min = 1;
//     let max = array.length + 1;
//     let copy = array.slice();
//     let arrNew = [];
//     let rand, elm;
    
//     while (true) {
//     rand = Math.floor(Math.random() * (max - min) + min);
//     elm = copy[rand - 1];
//     copy.splice(rand - 1, 1);
    
//     if (elm !== undefined) arrNew.push(elm);
//     if (copy.length == 0) break;
//     }
    
//     return arrNew;
// }
console.log(shuffle([1,2,3]))
console.log(shuffle([1,2,3]))
console.log(shuffle([1,2,3]))