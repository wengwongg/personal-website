import { format } from "date-fns";
import { sortPostsIntoFinalVersion } from "../../../lib/utils";
import { getAllPosts } from "../../../lib/mdx";
import UnderlinedLink from "../../../components/UnderlinedLink";
import Heading from "../../../components/Heading";

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
            <Heading>
              {new Date(
                postsForAGivenMonthAndYear.year,
                postsForAGivenMonthAndYear.month - 1,
                1
              ).toLocaleString("default", { month: "long", year: "numeric" })}
            </Heading>

            {postsForAGivenMonthAndYear.posts.map((post) => (
              <div className="flex justify-between">
                <span className="font-normal">
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
