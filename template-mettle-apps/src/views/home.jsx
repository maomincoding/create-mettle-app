import { signal } from 'mettle';
import { linkTo } from 'mettle-router';

export default function Home() {
  const msg = signal('hello');

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
    msg.value = 'world';
  }

  return (
    <>
      <button onClick={goAbout}>goAbout</button>
      <h1>Home</h1>
      <p onClick={useChange}>{msg.value}</p>
    </>
  );
}
