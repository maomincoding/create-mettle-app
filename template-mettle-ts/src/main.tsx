import { createApp } from 'mettle';
import Home from './views/home';
import './style/app.css';

function App() {
  return (
    <div class='inner'>
      <h1>Hello mettle.js</h1>
      <div class='app-tool'>
        <Home />
      </div>
    </div>
  );
}

createApp(<App />, '#app');
