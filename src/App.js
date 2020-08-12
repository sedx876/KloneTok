import React from 'react';
import Video from "./Video";
import './App.css';


function App() {
  return (
    //BEM-Block Element Modifier
    <div className="App">
      <h1>KloneTok</h1>

      <div className="app__videos">
        <Video />
        <Video />
        <Video />
        <Video />
      </div>

    </div>
  );
}

export default App;
