import post from "@/modals/post"
import Image from "next/image"
import { FC } from "react"

const PostSummary:FC<{post:post}>=({post})=>{
    const readableText=new Date(post.date).toLocaleDateString('en-US',{
        weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
    })
    const imagePath=`/images/posts/${post.slug}/${post.image}`
    return(
        <div className="w-[22rem] h-96 bg-primary-dark p-0 text-center text-light-text-2">
            <Image src={imagePath} alt={post.title} width={250} height={160} className="w-full m-0 h-56 mt-20"/>
            <div className="grid grid-rows-[min-content_min-content_1fr] items-center h-40">
                <h3 className="text-2xl font-bold m-1">{post.title}</h3>
                <time className="text-light-text text-xs italic">{readableText}</time>
                <p className="m-1 text-sm">{post.excerpt}</p>
            </div>
        </div>
    )
}
export default PostSummary