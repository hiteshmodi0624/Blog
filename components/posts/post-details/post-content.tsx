import ReactMarkdown from "react-markdown"
import PostHeader from "./post-header"
import { FC } from "react"
import post from "@/modals/post"
import styles from "./post-content.module.css"
import Image from "next/image"
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter"
import atomDark from "react-syntax-highlighter/dist/cjs/styles/prism/atom-dark"
import js from "react-syntax-highlighter/dist/cjs/languages/prism/javascript"
import css from "react-syntax-highlighter/dist/cjs/languages/prism/css"

SyntaxHighlighter.registerLanguage('js',js);
SyntaxHighlighter.registerLanguage('css',css);
const PostContent:FC<{post:post}>=({post})=>{
    const imageUrl=`/images/posts/${post.slug}/${post.image}`

    const customRenderers={
        // img(image:any){
        //     return (
        //         <Image
        //             src={`/images/posts/${post.slug}/${image.src}`}
        //             alt={image.alt}
        //             width={600}
        //             height={300}
        //         />
        //     );
        // },
        p(paragraph:any) {
            const { node } = paragraph;
            if (node.children[0].tagName === 'img') {
                const image = node.children[0];
                return (
                    <div className="flex justify-center">
                        <Image
                            src={`/images/posts/${post.slug}/${image.properties.src}`}
                            alt={image.alt}
                            width={600}
                            height={300}
                        />
                    </div>
                );
            }
            return <p>{paragraph.children}</p>;
        },
        code(code:any) {
            const { className, children } = code;
            const language = className.split('-')[1]; // className is something like language-js => We need the "js" part here
            return (
              <SyntaxHighlighter
                style={atomDark}
                language={language}
              >{children}</SyntaxHighlighter>
            );
          },
    }

    return (
        <article className={`flex flex-col lg:w-2/3 lg:place-self-center bg-purple-100  py-12 px-6 overflow-scroll lg:m-6 ${styles.content}`}>
            <PostHeader title={post.title} image={imageUrl}/>
            <hr className="border-purple-900 border-4 w-full opacity-60 mt-8 mb-8"/>
            <ReactMarkdown components={customRenderers}>{post.content}</ReactMarkdown>
        </article>
    )

}
export default PostContent