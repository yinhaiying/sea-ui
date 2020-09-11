import React from 'react';
import Button, { ButtonSize, ButtonType } from "./packages/Button/button";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>react study</h1>
        <Button>Hello</Button>
        <Button disabled>Hello</Button>
        <Button type = {ButtonType.Primary} size = {ButtonSize.Large}>Hello</Button>
        <Button type = {ButtonType.Link}  href = "http://www.baidu.com">百度</Button>
        <Button type = {ButtonType.Link}  href = "http://www.baidu.com" disabled>百度</Button>
      </header>
    </div>
  );
}

export default App;
