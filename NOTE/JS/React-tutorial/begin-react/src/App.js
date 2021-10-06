import React from 'react';
import Hello from './Hello';
import Wrapper from './Wrapper';
import Counter from './Counter';


function App() {
  return (
    //태그는 꼭 닫혀야 한다.
    //두개 이상의 태그는 감싸야 한다.
    //js값을 보여줄때 {}감싸기
    <Wrapper>
      <Hello name = "react" color = "red" isSpecial = {true}/>
      <Hello color = "pink"/>
    </Wrapper>
  );
}

export default App;
