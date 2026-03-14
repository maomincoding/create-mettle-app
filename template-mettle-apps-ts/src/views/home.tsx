import { signal, batch } from 'mettle';
import { linkTo } from 'mettle-router';

export default function Home() {
  const msg = signal('hello');
  const count = signal(3);

  function goAbout() {
    linkTo({
      path: '/about',
      query: {
        id: 1,
        name: 'maomin',
      },
    });
  }

  function useChange() {
    batch(() => {
      msg.value = 'world';
      count.value++;
    });
  }

  return (
    <>
      <button onClick={goAbout}>goAbout</button>
      <h1>Home</h1>
      <p onClick={useChange}>{msg.value}</p>
    </>
  );
}
