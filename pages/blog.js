import Head from 'next/head';
import Header from '../components/Header';
import Form from '../components/Form';
import Footer from '../components/Footer';

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