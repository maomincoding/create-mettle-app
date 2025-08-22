import {
  signal as signalUntyped,
  produce as produceUntyped,
  batch,
  computed as computedUntyped,
} from 'mettle';
import { linkTo } from 'mettle-router';

const signal = signalUntyped as any;
const produce = produceUntyped as any;
const computed = computedUntyped as any;

export default function Home() {
  const msg = signal('hello');
  const arr = signal([1, 2]);
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
      arr.value = produce(arr.value, (draft: any) => {
        draft.unshift(count.value);
      });
    });
  }

  const list = computed(() => arr.value.map((item: any) => <li key={item}>{item}</li>));

  return (
    <fragment>
      <button onClick={goAbout}>goAbout</button>
      <h1>Home</h1>
      <p onClick={useChange}>{msg}</p>
      <ul>{list}</ul>
    </fragment>
  );
}
