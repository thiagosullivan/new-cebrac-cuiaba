import Head from 'next/head';
import Header from '../../components/Header';
import Form from '../../components/Form';
import Footer from '../../components/Footer';
import { getAllPosts } from '../../lib/dato-cms';
import PostBlogContent from '../../components/PostBlogContent';

export default function Blog({post}) {

  console.log(post, 'publicação')
  return (
    <div>
      <Head>
        <title>{post.title} | Cebrac Unidade de Cuiabá</title>
      </Head>
      <Header />
      <main>
        <PostBlogContent post={post} />
        <Form />
        <div className='home__bg'></div>
      </main>
      <Footer />
    </div>
  )
}

export const getStaticProps = async ({ params }) => {
  const slug = params?.slug;
  const posts = await getAllPosts();
  const post = posts.find((s) => s.slug === slug) || null;

  if(!post) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      post,
      allPosts: posts,
    },
    revalidate: 60,
  };
};

export const getStaticPaths = async () => {
  const posts = await getAllPosts();
  const slugs = posts.map((s) => ({ params: { slug: s.slug }}));

  return {
    paths: slugs,
    fallback: false,
  }
}