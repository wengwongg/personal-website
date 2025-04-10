import MainTextWrapper from "../../../../components/MainTextWrapper";
import { getPostBySlug } from "../../../../lib/mdx";
import Head from "next/head";
import "./page.css";

interface BlogPostProps {
  params: {
    slug: string;
  };
}

export default async function BlogPost({ params }: BlogPostProps) {
  const { title, description, date, minutes, content } = await getPostBySlug(
    params.slug
  );

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="author" content="George Hum" />
      </Head>
      <main>
        <div className="post">
          <div className="post-title-and-date mb-6">
            <h2 className="text-xl font-extrabold text-primary dark:text-primary-dark">
              {title}
            </h2>
            <time className="font-normal text-secondary-dark text-[#000] dark:text-white">
              {date.toLocaleString("default", {
                day: "2-digit",
                month: "long",
                year: "numeric",
                weekday: "long",
              })}
            </time>
            <div className="badge text-stone-200 dark:bg-stone-600 dark:text-stone-200 ml-3">
              ⏳ {minutes} min
            </div>
          </div>
          <MainTextWrapper>{content}</MainTextWrapper>
        </div>
      </main>
    </>
  );
}
