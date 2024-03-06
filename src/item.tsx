import { Comment } from "./comment";
import { Story } from "./story";
import { useItem } from "./use-item";

export interface ItemProps {
  id?: number;
}

export function Item({ id }: ItemProps) {
  const item = useItem(id);

  if (!item) return null;

  switch (item.type) {
    case "story":
      return <Story {...item} />;
    case "comment":
      return <Comment {...item} />;
    case "job":
      return null;
    default:
      return (
        <div className="max-w-full overflow-x-scroll">
          <pre className="text-red-400">{JSON.stringify(item, null, 2)}</pre>
        </div>
      );
  }
}
