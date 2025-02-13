import { defineComponent } from 'mettle';
import { linkTo } from 'mettle-router';

const home = () =>
  defineComponent(({ setData }) => {
    const state = {
      msg: 'hello',
      arr: [1, 2],
      count: 3,
    };

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
      setData(() => {
        state.msg = 'world';
        state.count++;
        state.arr.unshift(state.count);
      });
    }

    return () => (
      <fragment>
        <button onClick={goAbout}>goAbout</button>
        <h1>Home</h1>
        <p onClick={useChange}>{state.msg}</p>
        <ul>
          {state.arr.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </fragment>
    );
  });

export default home;
