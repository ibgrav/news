import { effect, signal } from "@preact/signals";
import { HN, getItem, isStory } from "./lib/hackernews";

export const dir = signal(-1);
export const index = signal(0);
export const ids = signal<number[]>([]);
export const story = signal<HN.Story | null>(null);

effect(async () => {
  if (ids.value[index.value]) {
    const item = await getItem(ids.value[index.value]);

    if (isStory(item)) {
      story.value = item;
    } else {
      if (dir.value > 0) next();
      else previous();
    }
  }
});

export function next() {
  dir.value = 1;
  index.value = index.value < ids.value.length - 1 ? index.value + 1 : 0;
}

export function previous() {
  dir.value = -1;
  index.value = index.value > 0 ? index.value - 1 : ids.value.length - 1;
}
