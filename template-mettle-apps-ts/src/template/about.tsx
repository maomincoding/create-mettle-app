import { linkTo, toParse } from 'mettle-router';

export default function About() {
  function goHome() {
    linkTo({
      path: '/',
    });
  }

  function getOption() {
    console.log(toParse());
  }

  return () => (
    <fragment>
      <button onClick={goHome}>goHome</button>
      <h1 onClick={getOption}>About</h1>
    </fragment>
  );
}
