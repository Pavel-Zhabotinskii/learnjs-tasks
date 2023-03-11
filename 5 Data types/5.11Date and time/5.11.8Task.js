const formatDate = (date) => {
    const difference = new Date() - date
    const differenceSec = Math.round(difference / 1000)
    const differenceMin = Math.round(difference / 60000)

    if (difference < 1000) return "прямо сейчас"
    if (differenceSec < 60) return `${differenceSec} сек. назад`
    if(differenceMin < 60) return `${differenceMin} мин. назад`

    let formattedDate = [
        date.getDate(),
        date.getMonth() + 1,
        date.getFullYear(),
        date.getHours(),
        date.getMinutes()
    ].map(el => ('' + el).length < 2 ? '0' + el : el)

    return formattedDate.slice(0, 3).join('.') + ' ' + formattedDate.slice(3).join(':')
}

console.log( formatDate(new Date(new Date - 1)) ); // "прямо сейчас"

console.log( formatDate(new Date(new Date - 30 * 1000)) ); // "30 сек. назад"

console.log( formatDate(new Date(new Date - 5 * 60 * 1000)) ); // "5 мин. назад"

console.log(formatDate(new Date(new Date - 86400 * 1000)) )
