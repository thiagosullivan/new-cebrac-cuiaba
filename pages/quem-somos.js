import Head from 'next/head';
import Header from '../components/Header';
import Form from '../components/Form';
import Footer from '../components/Footer';
import { getAllPosts } from '../lib/dato-cms';
import AboutUs from '../components/AboutUs';

export default function About({posts}) {

  return (
    <div>
      <Head>
        <title>Quem Somos | Cebrac Unidade de Cuiabá</title>
      </Head>
      <Header />
      <main>
        <AboutUs />
        <Form />
        <div className='home__bg'></div>
      </main>
      <Footer />
    </div>
  )
}