"use client";
import { usePageRouterLogic } from "../hook";

const Show = () => {
  const id = usePageRouterLogic();
  return(
    <div className={"show"}>
      <div className={"content"}>
        <div className={"subTitleBox"}>
          <strong>{id}へようこそ！！</strong>
        </div>
        <div className={"titleBox"}>
          <strong>プシューポートフォリオ</strong>
          <p>作りたいものを現実に〜</p>
        </div>
      </div>
      <video src="/show.mp4" autoPlay muted loop></video>
    </div>
  );
};

export default Show;
