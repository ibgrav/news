export interface HNStory {
  type: "story";
  by: string;
  descendants: number;
  id: number;
  kids: Array<number>;
  score: number;
  time: number;
  title: string;
  url: string;
}
