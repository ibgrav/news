import { useState } from "react";
import { HN, getItem, getTopStories, isStory } from "@/lib/hackernews";
import { useAsyncEffect } from "@/lib/use-async-effect";

let dir: -1 | 1 = -1;
let ids: number[] = [];

export function Home() {
  const [index, setIndex] = useState(0);
  const [story, setStory] = useState<HN.Story>();

  const next = () => {
    dir = 1;
    setIndex((i) => (i < ids.length - 1 ? i + 1 : 0));
  };

  const previous = () => {
    dir = -1;
    setIndex((i) => (i > 0 ? i - 1 : ids.length - 1));
  };

  const storiesLoading = useAsyncEffect(async () => {
    ids = await getTopStories();
  }, []);

  const loading = useAsyncEffect(async () => {
    if (ids[index]) {
      const item = await getItem(ids[index]);
      if (isStory(item)) setStory(item);
      else {
        if (dir > 0) next();
        else previous();
      }
    }
  }, [ids, index]);

  if (!story || !ids) return null;

  return (
    <>
      {storiesLoading || loading ? (
        <div className="animate-ping fade-in">_</div>
      ) : (
        <div className="flex flex-col transition fade-in">
          <div className="w-full text-sm text-gray-400 self-end flex justify-between mb-2">
            <div>{index + 1}</div>
            <div>{story.by}</div>
            <div>{story.score}</div>
          </div>
          <a target="_blank" href={story.url} className="block">
            {story.title}
          </a>
        </div>
      )}

      <div className="flex justify-between font-bold text-xl">
        <button onClick={previous}>{"<"}</button>
        <button onClick={next}>{">"}</button>
      </div>
    </>
  );
}
