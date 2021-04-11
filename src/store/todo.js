import { makeAutoObservable } from 'mobx';

class Todo {
  todos = [
    { id: 1, title: 'сходить на работу', complete: true },
    { id: 2, title: 'купить дом', complete: false },
    { id: 3, title: 'покормить кота', complete: false },
  ];

  constructor() {
    makeAutoObservable(this);
  }

  addTodo(todo) {
    this.todos.push(todo);
    console.log('addTodo');
  }
  removeTodo(id) {
    this.todos = this.todos.filter(todo => todo.id !== id);
    console.log('addTodo');
  }
  completeTodo(id) {
    this.todos = this.todos.map(todo =>
      todo.id === id ? { ...todo, complete: !todo.complete } : todo
    );
    console.log('completeTodo');
  }

  fetchTodos() {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(json => (this.todos = [...this.todos, ...json]));
  }
}

export default new Todo();
