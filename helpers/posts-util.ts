import fs from 'fs'
import matter from 'gray-matter';
import path from 'path'

const postsDir = path.join(process.cwd(),"posts");

export function getPostData(postIdentifier:string){
    const postSlug=postIdentifier.replace(/\.md$/,'');
    const filePath=path.join(postsDir,`${postSlug}.md`);
    const fileContent=fs.readFileSync(filePath, 'utf-8')
    const { data, content } = matter(fileContent);
    const postData:{
        slug:string,
        content:string,
        [key:string]:any
    }= { 
        slug:postSlug,
        ...data,
        content
    }
    return postData
}
export function getPostsFiles(){
    return fs.readdirSync(postsDir)
}

export function getAllPosts(){
    const postFiles=getPostsFiles();
    const allPosts = postFiles.map(postFile=>getPostData(postFile))
    const sortedPosts=allPosts.sort((postA,postB)=>postA.date>postB.date?-1:1);
    return sortedPosts
}
export function getFeaturedPosts(){
    const allPosts=getAllPosts();
    const featuredPosts=allPosts.filter(post=>post.isFeatured);
    return featuredPosts
}