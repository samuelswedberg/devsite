import getPostMetadata from "./getPostMetadata"
import PostPreview from "./PostPreview";

  const Nav = () => {
    const postMetadata = getPostMetadata();
    const postPreviews = postMetadata.map((post) => (
      <PostPreview key={post.slug} {...post} />
    ));

  return (
    <nav className="sticky top-0 z-50">
      <div className="px-8 mx-auto bg-stone-950">
        <div className="flex justify-between p-2 text-stone-100">
          <div className="flex">
            <div className="flex justify-center py-5 px-3 space-x-3 mr-4">Samuel Swedberg | Docs</div>
            <div className="flex items-center space-x-3">
          </div>
          </div>
          <div className="flex items-center space-x-1">
          <a href="https://samuelswedberg.com" className="py-5 px-3 hover:underline underline-offset-4">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
            </svg>
          </a>
          {/*<a href="#" className="py-5 px-3">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
            </svg>
          </a>*/}
          </div>
        </div>
      </div>
    </nav>

  )
}

export default Nav