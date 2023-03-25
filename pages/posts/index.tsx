import PostList from "@/components/posts/post-list"
import Heading from "@/components/ui/heading"
import Section from "@/components/ui/section"
const posts=[
    {imageUrl:"/../public/hitesh.png",title:"fadsnklsdaf",date:"12/22/2021",description:"kjladsfljkfkjldsalkjfkladjskljf",id:"1",featured:true},
    {imageUrl:"/../public/hitesh.png",title:"fadsnklsdaf",date:"12/22/2021",description:"kjladsfljkfkjldsalkjfkladjskljf",id:"2",featured:true},
    {imageUrl:"/../public/hitesh.png",title:"fadsnklsdaf",date:"12/22/2021",description:"kjladsfljkfkjldsalkjfkladjskljf",id:"3",featured:true}
]
const PostPage=()=>{
    return (
        <Section className="text-primary-dark">
            <Heading text="All Posts" className="text-dark-text"/>
            <PostList posts={posts}/>
        </Section>
    )
}
export default PostPage