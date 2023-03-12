import { useState } from "react";

type Todo = { id: number; var1: number; var2: number; var3: number };

function App() {
  const [contents, setContents] = useState<Todo[]>([]);
  const [nextId, setNextId] = useState(1);
  const [nextVar1, setNextVar1] = useState(0);
  const [nextVar2, setNextVar2] = useState(1);
  const [nextVar3, setNextVar3] = useState(0);
  const [result, setResult] = useState(0);
  const [omega, setOmega] = useState(0);

  const setNewOmega = () => {
    setOmega(omega);
    console.log(omega);
  };

  const setNewContents = () => {
    setContents([
      ...contents,
      { id: nextId, var1: nextVar1, var2: nextVar2, var3: nextVar3 },
    ]);
    const delta = nextVar1 ** 2 * (nextVar3 / nextVar2) ** 2;
    setResult(result + delta);
    setNextId(nextId + 1);
    setNextVar1(nextVar1);
    setNextVar2(nextVar2);
    setNextVar3(nextVar3);
  };

  return (
    <>
      <p>
        測定結果：
        <input
          type="text"
          key={"入力0"}
          onChange={(e) => {
            setOmega(parseFloat(e.target.value));
          }}
        />
        <button type="button" key={"ボタン0"} onClick={setNewOmega}>
          登録
        </button>
        <span>ここを最初に入力して「登録」ボタンを押してください。</span>
      </p>
      <p>
        次数：
        <input
          type="text"
          key={"入力1"}
          onChange={(e) => {
            setNextVar1(parseFloat(e.target.value));
          }}
        />
        変数値：
        <input
          type="text"
          key={"入力2"}
          onChange={(e) => {
            setNextVar2(parseFloat(e.target.value));
          }}
        />
        不確かさ：
        <input
          type="text"
          key={"入力3"}
          onChange={(e) => {
            setNextVar3(parseFloat(e.target.value));
          }}
        />
        <button type="button" key={"ボタン"} onClick={setNewContents}>
          追加
        </button>
      </p>
      <ul>
        {contents.map((content) => (
          <li key={content.id}>
            <p>
              <span>データ{content.id}</span>
            </p>
            <span> 次数：{content.var1} </span>
            <span> 変数値：{content.var2} </span>
            <span> 不確かさ：{content.var3} </span>
          </li>
        ))}
      </ul>
      <p>全体の不確かさは、{omega * Math.sqrt(result)}です。</p>
    </>
  );
}

export default App;
