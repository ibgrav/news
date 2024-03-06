import { Item } from "./item";

export interface HomeProps {
  ids: Array<number>;
}

export function Home({ ids }: HomeProps) {
  return (
    <div className="flex flex-col p-1">
      {ids.map((id) => (
        <Item key={id} id={id} />
      ))}
    </div>
  );
}
