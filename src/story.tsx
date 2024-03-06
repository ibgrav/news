import { Item } from "./item";
import { HN } from "./types";

export function Story({ id, url, kids, title }: HN.Story) {
  if (!url || !title) return null;

  if (window.location.pathname === "/") {
    return (
      <div className="border-l border-b my-2 p-2">
        <a href={url} target="_blank" className="hover:underline">
          {title}
        </a>
        <a href={`/item/${id}`} className="ml-4 text-sm lin">
          {`[comments]`}
        </a>
      </div>
    );
  }

  return (
    <>
      <div className="border-b py-2 mb-2">
        <a href={url} target="_blank" className="text-2xl">
          {title}
        </a>
      </div>

      {kids && kids.length > 0 && (
        <div className="flex flex-col">
          {kids.map((id) => (
            <Item id={id} />
          ))}
        </div>
      )}
    </>
  );
}
