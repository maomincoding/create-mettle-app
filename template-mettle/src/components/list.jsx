import style from '../style/list.module.css';

export default function List({ setData }) {
  const listState = {
    arr: [1, 2],
  };
  let count = 3;

  function usePush() {
    listState.arr.push(count++);
    setData();
  }

  function useUnshift() {
    listState.arr.unshift(count++);
    setData();
  }

  function useDel() {
    listState.arr.splice(1, 1);
    setData();
  }

  return () => (
    <fragment>
      <div class={style.listInner}>
        <button onClick={useUnshift}>Unshift</button>
        <button onClick={usePush}>Push</button>
        <button onClick={useDel}>Del</button>
      </div>
      <ul class={style.listInner}>
        {listState.arr.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </fragment>
  );
}
