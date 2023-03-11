let date = new Date(2012, 0, 3);  // 3 января 2012 года

const getLocalDay = (date) => date.getDay() === 0 ? 7 : date.getDay()

console.log(getLocalDay(date));// вторник, нужно показать 2

