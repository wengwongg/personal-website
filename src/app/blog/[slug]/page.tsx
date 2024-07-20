import MainTextWrapper from "../../../../components/MainTextWrapper";
import { getPostBySlug } from "../../../../lib/mdx";

interface BlogPostProps {
  params: {
    slug: string;
  };
}

export default async function BlogPost({ params }: BlogPostProps) {
  const { title, date, content } = await getPostBySlug(params.slug);

  return (
    <main>
      <div className="post">
        <div className="post-title-and-date mb-6">
          <h2 className="text-2xl font-semibold">{title}</h2>
          <time className="font-normal text-secondary-dark">
            {date.toLocaleString("default", {
              day: "2-digit",
              month: "long",
              year: "numeric",
              weekday: "long",
            })}
          </time>
        </div>
        <MainTextWrapper>{content}</MainTextWrapper>
      </div>
    </main>
  );
}
