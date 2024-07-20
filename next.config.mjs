import nextMDX from "@next/mdx";

const withMDX = nextMDX({
  extension: /\.mdx$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["ts", "tsx", "js", "jsx", "mdx", "md"],
};

export default withMDX(nextConfig);
