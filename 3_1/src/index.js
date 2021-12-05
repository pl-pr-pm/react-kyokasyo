// 追加ボタン押下字に実行する関数

const onClickAdd = () =>{
  const textEl = document.getElementById("add-text");

  // テキストボックスの値を取得
  const text = textEl.value;

  // テキストボックスを初期化
  textEl.value = "";

  const li = document.createElement("li");

  const div = document.createElement("div");

  const p = document.createElement("p");
  p.textContent = text;

  const button = document.createElement("button");
  button.textContent = "削除";

  button.addEventListener("click", () => {
    const deleteTarget = button.closest("li");

    document.getElementById("memo-list").removeChild(deleteTarget);
  });

  div.appendChild(p);

  div.appendChild(button);

  li.appendChild(div);

  document.getElementById("memo-list").appendChild(li);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
