fetch('https://jsonplaceholder.typicode.com/todos')
  .then(response => {
    return response.json();
  })

  .then((data) => { 
    data.forEach(todo => {
      let novoItem = document.querySelector(".item-lista").cloneNode(true);
    
    novoItem.classList.remove("model");
    
    novoItem.querySelector("#user-id").append(todo.userId);
    novoItem.querySelector("#title").append(todo.title);
    novoItem.querySelector("#finalizado").checked = todo.completed;
    
    document.querySelector(".lista").appendChild(novoItem);

    });

  });