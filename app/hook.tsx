"use client";
import { useParams } from "next/navigation";
import ReactMarkdown from "react-markdown";
import image from "./componets/img.jpg";
import homeMdFile from "./componets/mainPageMd/home.md"; 
import blogMdFile from "./componets/mainPageMd/blog.md";
import serviceMdFile from "./componets/mainPageMd/service.md"; 
import contactMdFile from "./componets/mainPageMd/contact.md";
import { useEffect, useState } from "react";

declare module "*.md" {
  const content: string;
  export default content;
}

export function usePageRouterLogic() {
  const { id } = useParams();
  return id;
};

export default function navListLogic() {
  let nav = [
    {
      "home": "/home",
    },
    {
      "blog": "/blog",
    },
    {
      "service": "/service",
    },
    {
      "contact": "/contact",
    }
  ];
  return nav;
}

export function getPageContentLogic(id: string) {
/*htmlが生で表示される*/
  const [markdown, setMarkdown] = useState("");

  let nav = navListLogic();

  if (id === 'home') {
    return <ReactMarkdown>{homeMdFile}</ReactMarkdown>;
  } else if (id === 'img') {
    return <img src={image}></img>;
  } else if (id === 'blog') {
    return (
      <>
        <ReactMarkdown>{blogMdFile}</ReactMarkdown>
      </>
    );
  } else if (id === 'service') {
    return <ReactMarkdown>{serviceMdFile}</ReactMarkdown>;
  } else if (id === 'contact') {
    return (
      <>
        <ReactMarkdown>{contactMdFile}</ReactMarkdown>
        <div className="center">
          <div className="form_design-1">
            <h3>お問い合わせ 内容入力</h3>
            <p>お問い合わせ内容をご入力の上、「確認画面へ」ボタンをクリックしてください。</p>
            <form className="form" action="https://pusyuuwanko.com/contact_form/confirm.php" method="post" name="form">
              <label>NAME<span>必須</span></label>
              <input type="text" name="name" placeholder="例）YAMADA-TAROU" defaultValue="" />
              <label>E-MAIL<span style={{ color: '#00ff00', paddingLeft: '5px' }}>任意</span></label>
              <input type="text" name="email" placeholder="例）guest@example.com" defaultValue="" />
              <label>SEX<span>必須</span></label>
              <div className="yokoori">
                <input type="radio" name="sex" value="男性" defaultChecked /><span>男性</span>
                <input type="radio" name="sex" value="女性" /><span>女性</span>
                <input type="radio" name="sex" value="その他" /><span>その他</span>
              </div>
              <label>SELECT INQUIRY<span>必須</span></label>
              <select name="item">
                <option value="">お問い合わせ項目を選択</option>
                <option value="ご質問・お問い合わせ">ご質問・お問い合わせ</option>
                <option value="ご意見・ご感想">ご意見・ご感想</option>
              </select>
              <label>INQUIRY DETAIL<span>必須</span></label>
              <textarea name="content" rows="5" placeholder="お問合せ内容を入力"></textarea>
              <div className="center">
                <button type="submit">確認画面へ</button>
              </div>
            </form>
          </div>
        </div>
      </>
    );
  }
}
