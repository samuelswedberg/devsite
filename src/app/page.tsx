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
    <div className='py-10 text-center'>
      <h1 className="text-2xl text-slate-600 ">Welcome to my Documentation Page</h1>
      <p className="text-slate-950 mt-2">Please note that some areas of this documentation page is still under development. I will try to update my progress on new projects as frequent as possible.</p>
    </div>
  );
};

export default HomePage;
