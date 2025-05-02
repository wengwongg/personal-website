import MainTextWrapper from "../../../../components/MainTextWrapper";
import { getPostBySlug } from "../../../../lib/mdx";
import Head from "next/head";
import "./page.css";
import Heading from "../../../../components/Heading";

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
            <Heading>{title}</Heading>
            <time className="font-normal">
              {date.toLocaleString("default", {
                day: "2-digit",
                month: "long",
                year: "numeric",
                weekday: "long",
              })}
            </time>
          </div>
          {content}
        </div>
      </main>
    </>
  );
}
