import PostList from "@/components/posts/post-list"
import Heading from "@/components/ui/heading"
import Section from "@/components/layouts/section"
import { FC } from "react"
import post from "@/modals/post"
const FeaturedPosts:FC<{posts:post[]}>=({posts})=>{
    return (
        <Section className="text-primary-dark">
            <Heading text="Featured Post" className="text-dark-text"/>
            <PostList posts={posts}/>
        </Section>
    )
}
export default FeaturedPosts