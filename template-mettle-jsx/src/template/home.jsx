import { defineComponent } from 'mettle';

const Home = defineComponent(({ setData }) => {
  let count = 0;

  function add() {
    setData(() => {
      count++;
    });
  }

  return () => (
    <fragment>
      <button onClick={add}>Add</button>
      <h1>{count}</h1>
      <input value={count} />
    </fragment>
  );
});

export default Home;
