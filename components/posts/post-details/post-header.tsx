import Image from "next/image";
import { FC } from "react";

const PostHeader:FC<{title:string,image:string}>=(props)=>{
    return <header>
        <h1>{props.title}</h1>
        <Image src={props.image} height={150} width={200} alt={props.image}/>
    </header>
}
export default PostHeader