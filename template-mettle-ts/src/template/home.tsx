export default function Home({ setData }: any) {
  let count = 0;

  function add() {
    count++;
    setData();
  }
  return () => (
    <fragment>
      <button onClick={add}>Add</button>
      <h1>{count}</h1>
      <input value={count} />
    </fragment>
  );
}
