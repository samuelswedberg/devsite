import Link from "next/link";
import { PostMetadata } from "./PostMetadata";

const PostPreview = (props: PostMetadata) => {
  return (
      <Link className="py-2 hover:bg-stone-400" href={`/docs/${props.slug}`}>
        <h2 className="pl-4 text-stone-950 mb-2 mt-2 align-middle">{props.title}</h2>
      </Link>
  );
};

export default PostPreview;
