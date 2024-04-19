const Footer = ()=> {
  return(
    <footer className={"footer"}>
      <div className="yokoori gap15px">
        <div className={"normal-box"}>
          <h3>ページ概要</h3>
          <p>ここはNEXTJS出できたポートフォリオです。はい</p>
        </div>
        <div className={"normal-box column"}>
          <h3>その他のプロダクト</h3>
          <a href="https://pusyuuwanko.com/Profile/?hatatinaritakunai" target="_blank">二十歳にはなりたくないー、そんなプシューの気持ちのサイト</a>
          <a href="https://pusyuuwanko.com/bbs_of_php" target="_blank">プシューIPS/PusyuuIPS</a>
          <a href="https://pusyuuwanko.com/Profile" target="_blank">プシューわんこ/プロフィール</a>
          <a href="https://pusyuuwanko.com/PusyuuAppStore" target="_blank">プシューアプリストア</a>
          <a href="https://pusyuuwanko.com/koukaon" target="_blank">プシュー効果音</a>
          <a href="https://pusyuuwanko.com/japan" target="_blank">美しい日本の文化を〜</a>
          <a href="https://pusyuuwanko.com" target="_blank">プシューゲートウェイ</a>
        </div>
        <div className={"normal-box column"}>
          <h3>試してみる？？↓</h3>
          <iframe width="100%" height="100%" src="https://pusyuuwanko.com/bbs_of_php"></iframe>
        </div>
        <div className={"normal-box column"}>
          <h3>規約等</h3>
          <a href="https://pusyuuwanko.com/TermsAndPrivacypolicy/terms" target="_blank">利用規約</a>
          <a href="https://pusyuuwanko.com/TermsAndPrivacypolicy/privacypolicy" target="_blank">プライバシーポリシー</a>
        </div>
      </div>
      <div className={"match-box center"}>
        <p>© 2020-2024 created by PusyuuWanko/</p>
      </div>
    </footer>
  );
}

export default Footer;
