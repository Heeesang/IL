import React from 'react';
import Hello from './Hello';
import './App.css';

function App() {
  const name = 'react'
  const style = {
    backgroundColor: 'black',
    color: 'aqua',
    fontSize: 24,
    padding: '1rem'
  }
  return (
    //태그는 꼭 닫혀야 한다.
    //두개 이상의 태그는 감싸야 한다.
    //js값을 보여줄때 {}감싸기
    <>
      <Hello/>
      <div style = {style}>{name}</div>
      <div className = 'gray-box'></div>
    </>  
  );
}

export default App;
