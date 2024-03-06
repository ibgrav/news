import type { HNStory } from "../types.ts";
import { fetchHackerNews, API } from "../lib/hacker-news.ts";

export default async function Home() {
  const topStoryIds = await fetchHackerNews<Array<number>>(API.TOP_STORIES);

  const stories = await Promise.all(
    topStoryIds
      .splice(0, 100)
      .map((id) => fetchHackerNews<HNStory>(API.ITEM, id))
  );

  return (
    <div className="flex flex-col gap-3 px-2 py-4">
      {stories.map((story) => (
        <div>
          <a href={story.url} target="_blank">
            {story.title}
          </a>
          <a href={`/item/${story.id}`} className="text-gray-400 ml-2">
            {`[${story.id}]`}
          </a>
        </div>
      ))}
    </div>
  );
}
