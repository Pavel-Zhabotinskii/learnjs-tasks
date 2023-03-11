// const printNumbers = (from, to) =>{
//     let id = setInterval(() => {
//             console.log(from)
//             ++from
//             if(from === to) clearInterval(id)
//     }, 1000)
// }

const printNumbers = (from, to) => {
    setTimeout(go = () => {
        console.log(from);
        if (from < to) {
            setTimeout(go, 1000);
        }
        from++;
    }, 1000);
}
  


printNumbers(3,10)