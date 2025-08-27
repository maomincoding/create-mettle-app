import { signal, produce } from 'mettle';
import style from '../style/list.module.css';

export default function List() {
  const arr = signal([1, 2]);
  const count = signal(3);

  function usePush() {
    arr.value = produce(arr.value, (draft) => {
      draft.push(count.value++);
    });
  }

  function useUnshift() {
    arr.value = produce(arr.value, (draft) => {
      draft.unshift(count.value++);
    });
  }

  function useDel() {
    arr.value = produce(arr.value, (draft) => {
      draft.splice(1, 1);
    });
  }

  return (
    <>
      <div class={style.listInner}>
        <button onClick={useUnshift}>Unshift</button>
        <button onClick={usePush}>Push</button>
        <button onClick={useDel}>Del</button>
      </div>
      <ul class={style.listInner}>
        {arr.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}
