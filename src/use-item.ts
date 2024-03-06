import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { HN } from "./types";

async function fetchItem(
  id: number,
  setData: Dispatch<SetStateAction<HN.Item | null>>
) {
  try {
    const res = await fetch(
      `https://hacker-news.firebaseio.com/v0/item/${id}.json`
    );
    const data = await res.json();
    setData(data);
  } catch (e) {
    console.error(e);
  }
}

export function useItem(id?: number) {
  const [data, setData] = useState<HN.Item | null>(null);

  useEffect(() => {
    if (id && !data) fetchItem(id, setData);
  }, [id, data]);

  return data;
}
