let room = {
    number: 23
};
  
let meetup = {
    title: "Совещание",
    occupiedBy: [{name: "Иванов"}, {name: "Петров"}],
    place: room
};
  
// цикличные ссылки
room.occupiedBy = meetup;
meetup.self = meetup;
  
console.log(JSON.stringify(meetup, (key, value) => (key != "" && value == meetup) ? undefined : value));
  
/* в результате должно быть:
  {
    "title":"Совещание",
    "occupiedBy":[{"name":"Иванов"},{"name":"Петров"}],
    "place":{"number":23}
  }
*/