const BASE_URL = "https://hacker-news.firebaseio.com/v0/";

const kv = await Deno.openKv();

export const API = {
  ITEM: "item",
  TOP_STORIES: "topstories",
};

export async function fetchHackerNews<T>(...paths: Array<string | number>) {
  const url = new URL(paths.join("/") + ".json", BASE_URL);

  const key = ["fetchHackerNews", url.href];
  const cached = await kv.get<T>(key);
  if (cached.value) return cached.value;

  const res = await fetch(url);
  const data = await res.json();

  await kv.set(key, data, { expireIn: 5 * 60 * 1000 /* 5 min */ });

  return data as T;
}
