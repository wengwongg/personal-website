import { JSXElementConstructor, ReactElement } from "react";

export interface Post {
  title: string;
  description: string;
  date: Date;
  content: ReactElement<any, string | JSXElementConstructor<any>>;
  star: boolean;
  minutes: number;
  slug: string;
}

export interface PostsForAGivenMonthAndYear {
  month: number;
  year: number;
  posts: Post[];
}

export type FinalSortedPosts = PostsForAGivenMonthAndYear[];
