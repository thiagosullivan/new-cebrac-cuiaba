import Head from 'next/head';
import Header from '../components/Header';
import Form from '../components/Form';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';
import { getAllPosts } from '../lib/dato-cms';
import BlogPosts from '../components/BlogPage';

export default function Blog({posts}) {

  return (
    <div>
      <Head>
        <title>Blog | Cebrac Unidade de Cuiabá</title>
      </Head>
      <Header />
      <main>
        <BlogPosts posts={posts} />
        <Form />
        <div className='home__bg'></div>
      </main>
      <ScrollToTop />
      <Footer />
    </div>
  )
}

export const getStaticProps = async () => {
  const posts = await getAllPosts();

  return {
    props: {
      posts: posts || []
    },
    revalidate: 5,
  }
}