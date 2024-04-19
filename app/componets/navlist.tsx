"use client";
import Link from "next/link";
import navListLogic from "../hook";

/*interface NavList {
  home?: string;
  blog?: string;
  service?: string;
  contact?: string;
}*/

export function navigationList() {
  let nav = navListLogic();
  let navList: JSX.Element[] = [];
  nav.forEach((objectItem: { [Key : string]: string | undefined}, index: number) => {
    Object.entries(objectItem).forEach(([key, value]) => {
      if (value && typeof value === "string") {
        navList.push(<li key={index}><Link href={value}>{key}</Link></li>);
      }
    });
  });

  return navList;
}

// この方法だと変数や関数をエクスポートできない、そのため関数そのものに対してexportを書くことにより解決が可能 export default navgationList;
