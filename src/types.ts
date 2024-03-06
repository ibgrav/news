export namespace HN {
  export type Item = Story | Comment | Job;

  type Base<T extends string, R> = {
    id?: number;
    type?: T;
    by?: string;
    kids?: Array<number>;
  } & Partial<R>;

  export type Story = Base<
    "story",
    {
      url?: string;
      title?: string;
    }
  >;

  export type Comment = Base<
    "comment",
    {
      text?: string;
    }
  >;

  export type Job = Base<
    "job",
    {
      url?: string;
      title?: string;
    }
  >;
}
