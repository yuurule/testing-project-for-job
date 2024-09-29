import PageHeader from "@/components/PageHeader";
import PostList from "@/components/PostList";
import { Suspense } from "react"
import { PostProps } from '@/libs/interfaces';
import { getPosts } from '@/services/postServices';

export default async function Home({ searchParams } : { searchParams : { keyword: string } }) {

  const posts = await getPosts(searchParams.keyword);
  //console.log(posts)

  return (
    <main className="site-wrapper">
      <div className="container">
        <div className="row">
          <PageHeader />
          <Suspense fallback={<p className="text-center my-5">...กรุณารอสักครู่</p>}>
            <PostList 
              posts={posts} 
            />
          </Suspense>
        </div>
      </div>
    </main>
  );
}
