import fs from "fs";
import Markdown from "markdown-to-jsx";
import matter from "gray-matter";
import getPostMetadata from "../../components/getPostMetadata";
import Sidenav from '../../components/Sidenav'

const getPostContent = (slug: string) => {
  const folder = "docs/";
  const file = `${folder}${slug}.md`;
  const content = fs.readFileSync(file, "utf8");
  const matterResult = matter(content);
  return matterResult;
};

export const generateStaticParams = async () => {
  const posts = getPostMetadata();
  return posts.map((post) => ({
    slug: post.slug,
  }));
};

const Docs = (props: any) => {
  const slug = props.params.slug;
  const post = getPostContent(slug);
  
  return (
    <div>
      <div className="my-12 text-center">
        <h1 className="text-2xl text-slate-600 ">{post.data.title}</h1>
        <p className="text-slate-400 mt-2">Last Updated: {post.data.date}</p>
        <h4 className="text-slate-600 pt-4 italic">{post.data.subtitle}</h4>
      </div>

      <article className="prose">
        <Markdown>{post.content}</Markdown>
      </article>
    </div>
  );
};

export default Docs;
