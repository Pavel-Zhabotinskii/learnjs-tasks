// function debounce(f, ms) {
//     let time;
//     return function() {
//         if ((Date.now() - time) < ms) {
//             return;
//         }
//         time = Date.now();
//         f.apply(this, arguments);
//     }
// }
function debounce(f, ms) {
    let p = false;
    return function() {
        if (p) return;

        f.apply(this, arguments);
        p = true;
        setTimeout(() => p = false, ms)
    }
}

let f = debounce(console.log, 1000);

f(1); // выполняется немедленно
f(2); // проигнорирован

setTimeout( () => f(3), 100); // проигнорирован (прошло только 100 мс)
setTimeout( () => f(4), 1100); // выполняется
setTimeout( () => f(5), 1500); // проигнорирован (прошло только 400 мс от послед