import { signal, produce } from 'mettle';
import style from '../style/list.module.css';

export default function List() {
  const arr = signal([1, 2]);
  const count = signal(3);

  function usePush() {
    arr.value = produce(arr.value, (draft: any) => {
      draft.push(count.value++);
    });
  }

  function useUnshift() {
    arr.value = produce(arr.value, (draft: any) => {
      draft.unshift(count.value++);
    });
  }

  function useDel() {
    arr.value = produce(arr.value, (draft: any) => {
      draft.splice(1, 1);
    });
  }

  return (
    <fragment>
      <div class={style.listInner}>
        <button onClick={useUnshift}>Unshift</button>
        <button onClick={usePush}>Push</button>
        <button onClick={useDel}>Del</button>
      </div>
      <ul class={style.listInner}>
        {arr.value.map((item: any) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </fragment>
  );
}
