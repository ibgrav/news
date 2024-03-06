import { useState } from "react";
import { HN } from "./types";
import { Item } from "./item";

export function Comment({ text, kids }: HN.Comment) {
  const [load, setLoad] = useState(false);

  if (!text) return null;

  return (
    <div className="border-l pl-2 my-2 pb-2">
      <div dangerouslySetInnerHTML={{ __html: text }} />
      {kids && kids.length > 0 && (
        <>
          {load === false && (
            <button onClick={() => setLoad(true)} className="block">
              …
            </button>
          )}
          {load === true && kids.map((id) => <Item key={id} id={id} />)}
        </>
      )}
    </div>
  );
}
