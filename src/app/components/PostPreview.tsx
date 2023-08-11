import Link from "next/link";
import { PostMetadata } from "./PostMetadata";

const PostPreview = (props: PostMetadata) => {
  return (
      <Link className="py-2 hover:bg-blue-400" href={`/docs/${props.slug}`}>
        <h2 className="pl-4 text-black mb-4 align-middle">{props.title}</h2>
      </Link>
  );
};

export default PostPreview;
