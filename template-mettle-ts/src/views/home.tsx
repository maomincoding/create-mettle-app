export default function Home() {
  let count: any = $signal(0);

  function add() {
    count++;
  }
  return (
    <>
      <button onClick={add}>Add</button>
      <h1>{count}</h1>
      <input value={count} />
    </>
  );
}
