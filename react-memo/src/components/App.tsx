import { ChangeEvent, useState, FC } from "react";
import styled from "styled-components";

export const App: FC = () => {
  // テキストボックスState
  const [text, setText] = useState<string>("");
  // メモ一覧State
  const [memos, setMemos] = useState<string[]>([]);

  //　TypeScriptでonChangeの値を取得するとき
  // ChangeEvent<HTMLInputElement> は型
  const onChangeText = (event: ChangeEvent<HTMLInputElement>) => setText(event.target.value);

  //追加ボタン押下時
  const onClickAdd = () => {
    if ( text === "") { return }
    //State変更を正常に検知させるため新たな配列を生成
    const newMemos = [...memos];
    // テキストボックスの入力内容をメモ配列に追加
    newMemos.push(text);
    setMemos(newMemos);
    setText("");
  };

  //削除ボタン押下時
  const onClickDelete = (index: number) => {
    const newMemos = [...memos];
    newMemos.splice(index, 1);
    setMemos(newMemos);
  };

  return (
    <div>
      <h1> 簡単メモアプリ</h1>
      <input type="text" value={text} onChange={onChangeText} />
      <SButton onClick={onClickAdd}>追加</SButton>
      <SContainer>
        <p> メモ一覧 </p>
        <ul>{memos.map((memo, index) => (
          // key of list in react https://se-tomo.com/2019/03/09/%E3%80%90react-js%E3%80%91%E3%83%AA%E3%82%B9%E3%83%88%E3%81%A8key%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6/
          // reactでは一意のkeyを指定するべきとのこと
          <li key={memo}>
            <SMemoWrapper>
              <p>{memo}</p>
              <SButton onClick={() => onClickDelete(index)}> 削除</SButton>
            </SMemoWrapper>
            </li>
        ))}
          </ul>
      </SContainer>
    </div>
  );
};

const SButton = styled.button`
  margin-left: 16px;
`;

const SContainer = styled.div`
  border: solid 1px #ccc;
  padding: 16px;
  margin: 8px;
`;

const SMemoWrapper = styled.div`
  display: flex;
  align-items: center;
`;
