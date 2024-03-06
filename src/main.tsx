import "./main.css";

import { ReactNode, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Home } from "./home";
import { HN } from "./types";
import { Item } from "./item";

let children: ReactNode = <h1>404</h1>;

if (location.pathname === "/") {
  const url = new URL(`https://hacker-news.firebaseio.com/v0/topstories.json`);
  const res = await fetch(url);

  const ids = (await res.json()) as Array<number>;

  children = <Home ids={ids.splice(0, 100)} />;
}

if (location.pathname.startsWith("/item/")) {
  const id = location.pathname.replace("/item/", "");
  const url = new URL(`https://hacker-news.firebaseio.com/v0/item/${id}.json`);

  const res = await fetch(url);
  const item = (await res.json()) as HN.Item;

  children = <Item {...item} />;
}

createRoot(document.getElementById("root") as HTMLDivElement).render(
  <StrictMode>{children}</StrictMode>
);
