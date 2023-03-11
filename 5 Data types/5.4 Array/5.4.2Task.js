const styles = ['Джаз', 'Блюз',]

styles.push('Рок-н-ролл')

let indexOfAverageValue = Math.round((styles.length - 1) / 2)

styles[indexOfAverageValue] = 'Классика'
styles.shift()
styles.unshift("Рэп", "Регги")

console.log(styles)
