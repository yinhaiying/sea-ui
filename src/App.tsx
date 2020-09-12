import React from 'react';
import './App.css'
import Button, { ButtonSize, ButtonType } from './packages/Button/button';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Button</h1>
        <Button className="test" onClick={(e) => {e.preventDefault(); alert(123)}}>Hello</Button>
        <Button disabled>Hello</Button>
        <h2>尺寸</h2>
        <p><Button btnType={ButtonType.Primary} size={ButtonSize.Large}>Large 按钮</Button></p>
        <p><Button btnType={ButtonType.Primary} >Normal 按钮</Button></p>
        <p><Button btnType={ButtonType.Primary} size={ButtonSize.Small}>Small 按钮</Button></p>
        <h2>btnType</h2>
        <p><Button btnType={ButtonType.Primary} >百度</Button></p >
        <p><Button btnType={ButtonType.Default} >百度</Button></p >
        <p><Button btnType={ButtonType.Danger} >百度</Button></p >
        <p><Button btnType={ButtonType.Link} href={'http://www.baidu.com'} target="_blank">Baidu</Button></p >
        <h2>禁用</h2>
        <p><Button btnType={ButtonType.Danger}  >百度</Button></p >
        <p><Button btnType={ButtonType.Link} disabled >Disabled Link</Button></p >
      </header>
    </div>
  );
}

export default App;
