import React from 'react';
import madrid from '../madrid.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src= {madrid} />
        <p>
        Hi, my name is Caroline Liu. I’m a second-year Computer Science and Design Major at Northeastern University. My interest in computer science began when I had to create a website during my freshman year of high school. I was so enthusiastic about this project that I spent many hours researching web design and user interface design on my own time. I continued to pursue my interest by taking AP Computer Science and now, college courses to learn how to design programs and how to design with the user in mind. Most recently, I have continued my learning outside of the classroom by attending tech talks and exploring HTML, CSS, and JavaScript through hackathon projects.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
