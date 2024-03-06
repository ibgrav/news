import { PageProps, RouteContext } from "$fresh/server.ts";
import { API, fetchHackerNews } from "../../lib/hacker-news.ts";
import { HNStory } from "../../types.ts";

export default async function Item(_: PageProps, ctx: RouteContext) {
  const story = await fetchHackerNews<HNStory>(API.ITEM, ctx.params.id);

  return (
    <>
      <a href={story.url} target="_blank" className="block text-2xl border-b p-2">{story.title}</a>

      <pre>{JSON.stringify(story, null, 2)}</pre>
    </>
  );
}
