import React from 'react';
import './App.css';

import Timer from "./Timer.js";
import Toggle from "./Toggle";
import TodoList from "./TodoList";
import CardList from './CardList';
import Form from './Form';

const todoItems = [
  'Learn React',
  'Build a project',
  'Go for a walk',
  'Do some exercises',
  'Join a music class',
  'Read a novel',
];


  const cards = [
    { title: 'Card 1', content: 'This is the content of Card 1' },
    { title: 'Card 2', content: 'This is the content of Card 2' },
    { title: 'Card 3', content: 'This is the content of Card 3' },
  ];

function App() {
  return (
    <div>
       <Toggle/>
       <Timer />
       <TodoList todoItems={todoItems} />
       <CardList cards={cards} />
       <Form/>
    </div>
   
   
  
  );
}

export default App;
