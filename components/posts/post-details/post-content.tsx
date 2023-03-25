import PostHeader from "./post-header"
const DUMMY_DATA = {
    imageUrl: "/../public/hitesh.png",
    title: "fadsnklsdaf",
    date: "12/22/2021",
    description: "kjladsfljkfkjldsalkjfkladjskljf",
    id: "1",
    featured: true,
};
const PostContent=()=>{
    return (
        <article>
            <PostHeader title={DUMMY_DATA.title} image={DUMMY_DATA.imageUrl}/>
            {DUMMY_DATA.description}
        </article>
    )

}
export default PostContent