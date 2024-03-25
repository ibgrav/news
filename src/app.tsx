import { index, next, previous, story } from "./signals";

export function App() {
  if (!story.value) return null;

  return (
    <div className="flex flex-col justify-between p-3 outline-dashed outline-gray-500 w-[400px] h-[400px] leading-tight">
      <div>
        <div className="w-full text-sm text-gray-400 self-end flex justify-between mb-2">
          <div>{index.value + 1}</div>
          <div>{story.value.by}</div>
          <div>{story.value.score}</div>
        </div>
        <a target="_blank" href={story.value.url} className="pb-2 block border-b border-dashed border-gray-400">
          {story.value.title}
        </a>
      </div>

      <div
        className="py-2 max-h-fit overflow-y-scroll overflow-x-hidden"
        dangerouslySetInnerHTML={{ __html: story.value.text || "" }}
      />

      <div className="pt-2 flex justify-between font-bold text-xl leading-[1] border-t border-dashed border-gray-400">
        <button onClick={previous}>{"<"}</button>
        <button onClick={next}>{">"}</button>
      </div>
    </div>
  );
}
