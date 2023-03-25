import PostContent from "@/components/posts/post-details/post-content"
import { getFeaturedPosts, getPostData, getPostsFiles } from "@/helpers/posts-util"
import post from "@/modals/post"
import { GetStaticPaths, GetStaticPropsContext } from "next"
import Head from "next/head"
import { FC } from "react"

const Post:FC<{post:post}>=({post})=>{
    return (
        <>
            <Head>
                <title>{post.title}</title>
                <meta name="description" content={post.excerpt} />
            </Head>
        <PostContent post={post}/>
        </>
    )
}
export default Post

export const getStaticPaths:GetStaticPaths=()=>{
    const fileNames=getPostsFiles();
    const postsSlugs=fileNames.map((fileName)=>{
        return {params:{slug:fileName.replace(/\.md$/,'')}}
    })
    return {
        paths:postsSlugs,
        fallback:false
    }
}

export const getStaticProps=({params}:GetStaticPropsContext<{slug:string}>)=>{
    const post= getPostData(params!.slug);
    return {
      props:{
        post
      },
      revalidate:60
    }
  }