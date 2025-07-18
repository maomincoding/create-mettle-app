import { createApp } from 'mettle';
import Router from './router/index';

function App() {
  return () => <Router></Router>;
}

createApp(<App />, '#app');