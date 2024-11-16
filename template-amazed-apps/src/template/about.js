import { defineComponent } from 'amazed';
import { linkTo, toParse } from 'amazed-router';

const about = () =>
  defineComponent(() => {
    function goHome() {
      linkTo({
        path: '/',
      });
    }

    function getOption() {
      console.log(toParse());
    }

    return () => html`
      <fragment>
        <button onClick=${goHome}>goHome</button>
        <h1 onClick=${getOption}>About</h1>
      </fragment>
    `;
  });
export default about;
