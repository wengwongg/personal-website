import {
  FinalSortedPosts,
  PostsForAGivenMonthAndYear,
  Post,
} from "./definitions";

export function sortPostsIntoFinalVersion(posts: Post[]): FinalSortedPosts {
  // Sort the posts by date first.
  const sortedPosts: Post[] = posts.sort(
    (a, b) => b.date.getTime() - a.date.getTime()
  );

  // Partition the posts by month/year.
  const finalSortedPosts: FinalSortedPosts = [];

  let currentMonth = 0;
  let currentYear = 0;
  for (const post of sortedPosts) {
    const month = post.date.getMonth() + 1;
    const year = post.date.getFullYear();

    if (currentMonth === month && currentYear === year) {
      // add post to existing partition
      finalSortedPosts[finalSortedPosts.length - 1].posts.push(post);
    } else {
      // create new month/year partition
      const newPartition: PostsForAGivenMonthAndYear = {
        month,
        year,
        posts: [post],
      };

      finalSortedPosts.push(newPartition);
      currentMonth = month;
      currentYear = year;
    }
  }

  return finalSortedPosts;
}
