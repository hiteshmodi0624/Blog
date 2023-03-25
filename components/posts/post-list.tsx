import post from "@/modals/post"
import { FC } from "react"
import PostSummary from "./post-summary"
import Link from "next/link"

const PostList:FC<{posts:post[]}>=({posts})=>{
    return (
        <ul className="grid grid-col-[repeat(autofit,22rem)] gap-12 w-full">
            {posts.map((post) => (
                <Link href={`/posts/${post.slug}`} key={post.slug}>
                    <PostSummary post={post} />
                </Link>
            ))}
        </ul>
    );
}
export default PostList