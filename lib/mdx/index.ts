import fs from "fs";
import path from "path";
import { compileMDX } from "next-mdx-remote/rsc";
import { Post } from "../definitions";
import { JSXElementConstructor, ReactElement } from "react";

interface Frontmatter {
  title: string;
  date: string;
  time: string;
  star: boolean;
}

const targetDirectory = path.join(process.cwd(), "posts");

export const getPostBySlug = async (slug: string): Promise<Post> => {
  const realSlug = slug.replace(/\.mdx$/, ""); // just in case
  const filePath = path.join(targetDirectory, `${realSlug}.mdx`);

  const fileContent = fs.readFileSync(filePath, { encoding: "utf8" });

  const { frontmatter, content } = (await compileMDX({
    source: fileContent,
    options: { parseFrontmatter: true },
  })) as {
    frontmatter: Frontmatter;
    content: ReactElement<any, string | JSXElementConstructor<any>>;
  };

  return {
    title: frontmatter.title,
    date: new Date(`${frontmatter.date}T${frontmatter.time}`),
    star: frontmatter.star,
    slug: realSlug,
    content,
  };
};

export const getAllPosts = async (): Promise<Post[]> => {
  const files = fs.readdirSync(targetDirectory);

  let posts = [];

  for (const file of files) {
    const post = await getPostBySlug(file);
    posts.push(post);
  }

  return posts;
};
