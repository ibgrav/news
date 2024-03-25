import "./main.css";

import { App } from "./app";
import { render } from "preact";
import { ids } from "./signals";
import { getTopStories } from "./lib/hackernews";

main();

async function main() {
  ids.value = await getTopStories();

  render(<App />, document.getElementById("root") as HTMLDivElement);
}
