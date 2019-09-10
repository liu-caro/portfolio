import React from 'react';
import madrid from './assets/madrid.jpg';
import hi from './assets/madrid.jpg';
import './App.css';

function App() {
    return (
        <div className="main-content">
            <header className="header">
                <div class="header">
                    <a href="#default" class="logo">CompanyLogo</a>
                    <div class="header-right">
                        <a class="active" href="#home">Home</a>
                        <a href="#contact">Contact</a>
                        <a href="#about">About</a>
                    </div>
                </div>
            </header>
            <div className ="body">
                <img src= {hi} />
                <p>
                    Hi, my name is Caroline Liu. I’m a second-year Computer Science and Design Major at Northeastern University. My interest in computer science began when I had to create a website during my freshman year of high school. I was so enthusiastic about this project that I spent many hours researching web design and user interface design on my own time. I continued to pursue my interest by taking AP Computer Science and now, college courses to learn how to design programs and how to design with the user in mind. Most recently, I have continued my learning outside of the classroom by attending tech talks and exploring HTML, CSS, and JavaScript through hackathon projects.
                </p>
            </div>
        </div>
    );
}

export default App;
