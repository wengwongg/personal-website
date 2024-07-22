import { format } from "date-fns";
import { sortPostsIntoFinalVersion } from "../../../lib/utils";
import { getAllPosts } from "../../../lib/mdx";
import UnderlinedLink from "../../../components/UnderlinedLink";

// posts should be sorted beforehand.
export default async function Blog() {
  const posts = await getAllPosts();
  const sortedPosts = sortPostsIntoFinalVersion(posts);

  return (
    <main>
      <div className="posts-list flex flex-col gap-7">
        {sortedPosts.map((postsForAGivenMonthAndYear) => (
          <div
            key={`${postsForAGivenMonthAndYear.month}/${postsForAGivenMonthAndYear.year}`}
            className="posts-partition flex flex-col gap-3"
          >
            <h2 className="ml-7 rakkas text-primary dark:text-primary-light text-lg">
              {new Date(
                postsForAGivenMonthAndYear.year,
                postsForAGivenMonthAndYear.month - 1,
                1
              ).toLocaleString("default", { month: "long", year: "numeric" })}
            </h2>
            {postsForAGivenMonthAndYear.posts.map((post) => (
              <div className="flex justify-between">
                <span className="font-normal">
                  <span className="min-w-7 inline-block">
                    {post.star ? "⭐" : " "}
                  </span>
                  <UnderlinedLink href={`/blog/${post.slug}`}>
                    {post.title}
                  </UnderlinedLink>
                </span>
                <time>{format(post.date, "dd")}</time>
              </div>
            ))}
          </div>
        ))}
      </div>
    </main>
  );
}
