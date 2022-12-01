import Image from 'next/image';
import React from 'react';
import ReactMarkdown from "react-markdown";
import { PostBlogContentContainer } from './style';

function PostBlogContent({post}) {
    const str = post.videoYoutube
    console.log(str, 'video')

    let mySubString

    if(str.includes('youtu.be')){
        mySubString = str.substring(
            str.indexOf(".be/") + 4,
            str.lastIndexOf("")
        );
    } else {
            mySubString = str.substring(
            str.indexOf("=") + 1,
            str.lastIndexOf("&")
        );
    }

  return (
    <PostBlogContentContainer>
        <div className='postpage__img'>
            <Image src={post.postimg.url} alt={post.title} layout="fill"/>
        </div>
        <span>{new Date(post.date).toLocaleDateString("pt-BR")}</span>
        <h2>{post.title}</h2>
        <ReactMarkdown className='post__text'>{post.content}</ReactMarkdown>
        <div className='post__blog__video'>
            {post.videoYoutube ?
            <iframe
                width="560"
                height="315"
                src={`https://www.youtube.com/embed/${mySubString}`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen>
            </iframe>
            : ''
            }
        </div>
    </PostBlogContentContainer>
  )
}

export default PostBlogContent