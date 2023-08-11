import Image from 'next/image'
import fs from "fs";
import getPostMetadata from "./components/getPostMetadata"
import PostPreview from "./components/PostPreview";
import Sidenav from "./components/Sidenav"
const HomePage = () => {
  const postMetadata = getPostMetadata();
  const postPreviews = postMetadata.map((post) => (
    <PostPreview key={post.slug} {...post} />
  ));

  return (
    <div>
      <h1>Welcome to my Documentation Page</h1>
      <p>The functionality is here. There is just no content yet. Last updated 8/10/23</p>
    </div>
  );
};

export default HomePage;
