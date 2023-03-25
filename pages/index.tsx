import FeaturedPosts from "@/components/sections/featured-posts";
import Hero from "@/components/sections/hero";
import { getFeaturedPosts } from "@/helpers/posts-util";
import post from "@/modals/post";
import { GetStaticProps } from "next";
import { FC } from "react";

const Home:FC<{posts:post[]}>=({posts})=>{
  console.log(posts)
  return (
    <>
      <Hero/>
      <FeaturedPosts posts={posts}/>
    </>
  )
}
export default Home
export const getStaticProps:GetStaticProps=()=>{
  const featuredPaths= getFeaturedPosts();
  return {
    props:{
      posts:featuredPaths
    },
    revalidate:21600
  }
}