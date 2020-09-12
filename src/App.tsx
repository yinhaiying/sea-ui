import React from 'react';
import './App.css'
import Button, { ButtonSize, ButtonType } from './packages/Button/button';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Button</h1>
        <Button>Hello</Button>
        <Button disabled>Hello</Button>
        <h2>尺寸</h2>
        <p><Button type={ButtonType.Primary} size={ButtonSize.Large}>Large 按钮</Button></p>
        <p><Button type={ButtonType.Primary} >Normal 按钮</Button></p>
        <p><Button type={ButtonType.Primary} size={ButtonSize.Small}>Small 按钮</Button></p>
        <h2>type</h2>
        <p><Button type={ButtonType.Primary} >百度</Button></p >
        <p><Button type={ButtonType.Default} >百度</Button></p >
        <p><Button type={ButtonType.Danger} >百度</Button></p >
        <p><Button type={ButtonType.Link} href={'http://www.baidu.com'}>Baidu</Button></p >
        <h2>禁用</h2>
        <p><Button type={ButtonType.Danger}  >百度</Button></p >
        <p><Button type={ButtonType.Link} disabled >Disabled Link</Button></p >
      </header>
    </div>
  );
}

export default App;
