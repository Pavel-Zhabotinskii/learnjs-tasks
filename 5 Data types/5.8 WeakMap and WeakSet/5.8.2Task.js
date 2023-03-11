let messages = [
    {text: "Hello", from: "John"},
    {text: "How goes?", from: "John"},
    {text: "See you soon", from: "Alice"}
];
  
const readMessagesAndAddDate = new WeakMap();
  
readMessagesAndAddDate.set(messages[0], new Date());