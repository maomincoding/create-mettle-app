import { signal as signalUntyped } from 'mettle';

const signal = signalUntyped as any;

export default function Home() {
  const count = signal(0);

  function add() {
    count.value++;
  }
  return (
    <fragment>
      <button onClick={add}>Add</button>
      <h1>{count}</h1>
      <input value={count} />
    </fragment>
  );
}
