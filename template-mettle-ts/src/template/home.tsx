import { signal } from 'mettle';

export default function Home() {
  const count: any = signal(0);

  function add() {
    count.value++;
  }
  return (
    <>
      <button onClick={add}>Add</button>
      <h1>{count.value}</h1>
      <input value={count.value} />
    </>
  );
}
