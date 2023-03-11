let login = prompt('Введите логин:')

if (login){
    if(login === 'Админ'){
        let password = prompt('Введите пароль:')
        if(password){
            password === 'Я главный' ? console.log('Здравствуйте!') : console.log('Неверный пароль')
        } else{
            console.log('Отменено')
        }
    } else {
        console.log('Я вас не знаю')
    }
} else {
    console.log('Отменено')
}