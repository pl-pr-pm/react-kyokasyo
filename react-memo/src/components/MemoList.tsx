import { FC } from "react";
import styled from "styled-components";

type Props = {
  memos: string[];
  onClickDelete: (index: number) => void;
};

export const MemoList: FC<Props> = (props) => {
  const { memos, onClickDelete } = props;

  return (
    <SContainer>
      <p> メモ一覧 </p>
      <ul>
        {memos.map((memo, index) => (
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
