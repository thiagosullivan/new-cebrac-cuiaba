import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import ReactPaginate from 'react-paginate';
import PostBlogIndividual from './PostBlogIndividual';
import {MdOutlineArrowBackIos, MdOutlineArrowForwardIos } from 'react-icons/md';
import { BlogPostContainer, PostCard } from './style'

function BlogPosts({posts}) {
    // console.log(posts, 'postagens')

    const [pageNumber, setPageNumber] = useState(0);

  const usersPerPage = 3;
  const pagesVisited = pageNumber * usersPerPage;

  const displayUsers = posts.slice(pagesVisited, pagesVisited + usersPerPage).map((posts) => {
    return (
      <PostBlogIndividual
        id={posts.id}
        authorName={posts.author}
        date={posts.date}
        title={posts.title}
        imgLink={posts.postimg}
        postLink={posts.slug}
        text={posts.content}
        resume={posts.resume}
        key={posts.id}
      />
    )
  })

  const pageCount = Math.ceil(posts.length / usersPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected)
  }

  return (
    <BlogPostContainer>
      {displayUsers}
      {displayUsers.length >= 2 &&
        <ReactPaginate
          previousLabel={<MdOutlineArrowBackIos />}
          nextLabel={<MdOutlineArrowForwardIos />}
          pageCount={pageCount}
          onPageChange={changePage}
          containerClassName={"paginationBtns"}
          previousClassName={"previousBtn"}
          nextLinkClassName={"nextBtn"}
          disabledClassName={"paginationDisabled"}
          activeClassName={"paginationActive"}
        />
      }
      
    </BlogPostContainer>
  )
}

export default BlogPosts