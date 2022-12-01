import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { PostCard } from './style'

function PostBlogIndividual({
    id,
    authorName,
    date,
    title,
    imgLink,
    postLink,
    text,
    resume,
    key
}) {
  return (
    <div>
        <PostCard key={id}>
            <div className='post__card__img'>
                <Link href={`/blog/${postLink}`}>
                    <a><Image src={imgLink.url} alt={title} layout="fill" /></a>
                    {/* <p>img</p> */}
                </Link>
            </div>
            <div className='post__card__txt'>
                <Link href={`/blog/${postLink}`}>
                    <a><h2>{title.length > 90 ? title.substr(0, 90) + "..." : title}</h2></a>
                </Link>
                <p>{resume.length > 250 ? resume.substr(0, 250) + "..." : resume}</p>
                <Link href={`/blog/${postLink}`}>Leia Mais</Link>
            </div>
        </PostCard>
    </div>
  )
}

export default PostBlogIndividual