import MainTextWrapper from "../../../../components/MainTextWrapper";
import { getPostBySlug } from "../../../../lib/mdx";

interface BlogPostProps {
  params: {
    slug: string;
  };
}

export default async function BlogPost({ params }: BlogPostProps) {
  const { title, date, minutes, content } = await getPostBySlug(params.slug);

  return (
    <main>
      <div className="post">
        <div className="post-title-and-date mb-6">
          <h2 className="text-xl font-bold text-primary dark:text-primary-light">
            {title}
          </h2>
          <time className="font-normal text-secondary-dark text-[#000]  dark:text-white">
            {date.toLocaleString("default", {
              day: "2-digit",
              month: "long",
              year: "numeric",
              weekday: "long",
            })}
          </time>
          <div className="badge  badge-ghost dark:badge-neutral ml-3">
            ⏳ {minutes} min
          </div>
        </div>
        <MainTextWrapper>{content}</MainTextWrapper>
      </div>
    </main>
  );
}
