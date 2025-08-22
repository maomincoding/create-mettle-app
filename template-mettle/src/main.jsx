import { createApp } from 'mettle';
import Home from './template/home';
import List from './components/list';
import './style/app.css';

function App() {
  return (
    <div class='inner'>
      <h1>Hello mettle.js</h1>
      <div class='app-tool'>
        <Home />
        <List />
      </div>
    </div>
  );
}

createApp(<App />, '#app');
