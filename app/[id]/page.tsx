"use client";
import { usePageRouterLogic, getPageContentLogic } from "../hook";

const RouterScript = () => {
  // useParams()を使って動的ルートのパラメーターを取得
  //const { id } = useParams();
  let id = usePageRouterLogic();

  return (
    <main className={"main"}>
      <div className={"main_wrapper"}>
        {getPageContentLogic(Array.isArray(id) ? id[0] : id)}
      </div>
    </main>
  );
};

export default RouterScript;
