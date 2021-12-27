import { ChangeEvent, useState, FC, useCallback } from "react";
import styled from "styled-components";
import { MemoList } from "./MemoList";
import { useMemoList } from "../hooks/useMemoList";

export const App: FC = () => {

  const { memos, addTodo, deleteTodo} = useMemoList();

  // テキストボックスState
  const [text, setText] = useState<string>("");

  //　TypeScriptでonChangeの値を取得するとき
  // ChangeEvent<HTMLInputElement> は型
  const onChangeText = (event: ChangeEvent<HTMLInputElement>) => setText(event.target.value);

  //追加ボタン押下時
  const onClickAdd = () => {
    addTodo(text);
    setText("");
  };

  //削除ボタン押下時
  // useCallback()を利用するわけ
  // propsとして関数がわたされるが、アロー関数？での関数定義の場合再レンダリングのたびに関数が再作成される
  // そのため、ｐropsが変化したとみなされ、子コンポーネントでも再レンダリングが発生してしまう
  const onClickDelete = useCallback((index: number) => {
    deleteTodo(index);
  },[deleteTodo]);

  return (
    <div>
      <h1> 簡単メモアプリ</h1>
      <input type="text" value={text} onChange={onChangeText} />
      <SButton onClick={onClickAdd}>追加</SButton>
      <MemoList memos={memos} onClickDelete={onClickDelete} />
      
    </div>
  );
};

const SButton = styled.button`
  margin-left: 16px;
`;

