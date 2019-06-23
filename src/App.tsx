import React from 'react';

import {Board} from "./components/board/Board";

import './App.css';
import {MoveSelector} from "./components/MoveSelector/MoveSelector";

const App: React.FC = () => {
  return (
    <div>
      <MoveSelector />
      <Board />
    </div>
  );
};

export default App;
