import React from 'react';
import './App.css';
import Header from './Header/Header';
import Content from './Content/Content'
import Footer from './Footer/Footer'
import SlickSlider from './Content/Slider/SlickSlider';

function App() {
  return (
    <div className="App">
      <Header />
      <Content />
      {/* <SlickSlider /> */}
    </div>
    
  );
}

export default App;
