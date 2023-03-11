const randomInteger = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
};
  
console.log( randomInteger(1, 7) ); 