import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './components/header';
import Menu from './components/menu';
import Home from './components/home';
import About from './components/about';
import Education from './components/education';
import Skills from './components/skills';
import Awards from './components/awards';
import Projects from './components/projects';
import reportWebVitals from './reportWebVitals';
import Portfolio from './components/portfolio';
import Scroll from './components/scroll';
import Footer from './components/footer';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <Menu />
    <Home />
    <About />
    <Education />
    <Skills />
    <Awards />
    <Projects />
    <Portfolio />
    <Scroll />
    <Footer />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
