

console.log("Fetch API todos")
const fetchtodo = [
    'https://jsonplaceholder.typicode.com/todos/1',
    'https://jsonplaceholder.typicode.com/todos/2',
  ];
  
  async function getTodos() {
    await fetchtodo.forEach(async (url, id) => { 
      const todo = await fetch(url);
      console.log(`Received Todo ${id+1}:`, todo);
    });
  console.log('Fetching Finished....!');
  }
  getTodos();