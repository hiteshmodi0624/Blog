import PostList from "@/components/posts/post-list"
import Heading from "@/components/ui/heading"
import Section from "@/components/layouts/section"
import { GetStaticProps } from "next"
import { getAllPosts } from "@/helpers/posts-util"
import { FC } from "react"
import post from "@/modals/post"
import Head from "next/head"
const PostPage:FC<{posts:post[]}>=({posts})=>{
    return (
      <>
        <Head>
            <title>All Posts</title>
            <meta name="description" content="A list of all programming related blogs" />
        </Head>
        <Section className="text-primary-dark">
            <Heading text="All Posts" className="text-dark-text"/>
            <PostList posts={posts}/>
        </Section>
      </>
    )
}
export default PostPage

export const getStaticProps:GetStaticProps=()=>{
    const featuredPaths= getAllPosts();
    return {
      props:{
        posts:featuredPaths
      },
      revalidate:21600
    }
  }