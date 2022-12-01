import Head from 'next/head';
import Header from '../components/Header';
import Form from '../components/Form';
import Footer from '../components/Footer';

import { getClient } from '../lib/sanity.server';
import groq from 'groq';

export default function Blog() {

  return (
    <div>
      <Head>
        <title>Blog | Cebrac Unidade de Cuiabá</title>
      </Head>
      <Header />
      <main>

        <Form />
        <div className='home__bg'></div>
      </main>
      <Footer />
    </div>
  )
}

// export async function getStaticProps({ preview = false }){
//   const posts = await getClient(preview).fetch(groq`
//     *[_type == "post" && publishedAt < now()] | order(publishedAt desc) {
//       _id,
//       title,
//       "username": author>username,
//       "categories": categories[]->{id, title},
//       "authorImage": author->avatar,
//       body,
//       mainImage,
//       slug,
//       publishedAt
//     }
//   `)

//   return {
//     props: {
//       posts,
//     },
//   }
// }