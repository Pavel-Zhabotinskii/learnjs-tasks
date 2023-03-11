const obj = {};

const isEpty = (obj) => Object.keys(obj).length ? false : true;

console.log(isEpty(obj))