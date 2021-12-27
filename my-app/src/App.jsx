import { useContext } from "react";
import { AdminFlagContext } from "./components/providers/AdminFlagProvider";
import { Card } from "./components/Card";

export const App = () => {
  
  // 押下時に管理者権限を切り替え
  const { isAdmin, setIsAdmin } = useContext(AdminFlagContext);
  const onClickSwith = () => setIsAdmin(!isAdmin);
  return (
    <div>
      {isAdmin ? <span>管理者です</span> : <span>管理者以外です</span>}
      <button onClick={onClickSwith}>切り替え</button>
      <Card isAdmin={isAdmin}/>
    </div>
  )
};