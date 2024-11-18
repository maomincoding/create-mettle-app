import { defineComponent } from 'mettle';
import Home from './template/home';
import List from './components/list';
import './style/app.css';

defineComponent(
  {
    mount: '#app',
  },
  () => {
    return () =>
      html`<div class="inner">
        <h1>Hello mettle.js</h1>
        <div class="app-tool">
          <component $is=${Home} />
          <component $is=${List} />
        </div>
      </div>`;
  }
);
