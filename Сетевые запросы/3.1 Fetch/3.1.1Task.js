let arr = ['Pavel-Zhabotinskii', 'Vladilen']

async function getUsers(logins) {
    let results = await Promise.all(logins.map((login) => fetch(`https://api.github.com/users/${login}`)));
    results = results.map((response) => {
        if (!response.ok) {
            return null;
        } else {
            return response.json();
        }
    });
    return (Promise.all(results)); //Возвращаем Промис с массивом объектов в качестве value.
}
console.log(getUsers(arr))