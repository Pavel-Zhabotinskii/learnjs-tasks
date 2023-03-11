const checkSpam = (str) => str.toLowerCase().includes('viagra') || str.toLowerCase().includes('xxx');

  
console.log( checkSpam('buy ViAgRA now') );
console.log( checkSpam('free xxxxx') );
console.log( checkSpam("innocent rabbit") );