const base = "https://hacker-news.firebaseio.com/v0/";

export async function getTopStories() {
  const res = await fetch(`${base}/topstories.json`);
  return (await res.json()) as Array<number>;
}

export async function getItem(id: number) {
  const res = await fetch(`${base}/item/${id}.json`);
  return (await res.json()) as HN.Item;
}

export function isStory(item: HN.Item): item is HN.Story {
  return item.type === "story";
}

export function isComment(item: HN.Item): item is HN.Comment {
  return item.type === "comment";
}

export namespace HN {
  export type Item<T extends string = string> = {
    id: number;
    type: T;
  };

  export type Story = Item<"story"> & {
    by: string;
    url: string;
    title: string;
    time: number;
    score: number;
    kids: number[];
    descendants: number;
  };

  export type Comment = Item<"comment"> & {
    by: string;
    url: string;
    text: string;
    time: number;
    kids: number[];
    parent: number;
  };
}
