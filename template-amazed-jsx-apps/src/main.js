import { defineComponent } from 'amazed';
import router from './router/index';
import './styles/app.css';

defineComponent(
  {
    mount: '#app',
  },
  () => {
    return () => <component $is={router.view()}></component>;
  }
);
