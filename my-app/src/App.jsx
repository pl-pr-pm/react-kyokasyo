import { useState } from "react";
import { Card } from "./components/Card";

export const App = () => {
  // 管理者フラグ
  const [isAdmin, setIsAdmin] = useState(false);
  // 押下時に管理者権限を切り替え
  const onClickSwith = () => setIsAdmin(!isAdmin);

  return (
    <div>
      {isAdmin ? <span>管理者です</span> : <span>管理者以外です</span>}
      <button onClick={onClickSwith}>切り替え</button>
      <Card isAdmin={isAdmin}/>
    </div>
  )
};