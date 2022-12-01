import Head from 'next/head';
import Header from '../components/Header';
import BannerHero from '../components/BannerHero';
import WhoWeDo from '../components/WhoWeDo';
import Careers from '../components/Careers';
import CloseToYou from '../components/CloseToYou';
import Depoiments from '../components/Depoiments';
import Form from '../components/Form';
import Footer from '../components/Footer';

// import { getClient } from '../lib/sanity.server';
// import groq from 'groq';
import { getAllDepo } from '../lib/dato-cms';

export default function Home({ depos }) {
  console.log(depos, 'depos')

  return (
    <div>
      <Head>
        <title>Cebrac Unidade de Cuiabá</title>
      </Head>
      <Header />
      <main>
        <BannerHero />
        <WhoWeDo />
        <Careers />
        {/* <CloseToYou /> */}
        <Depoiments depos={depos} />
        <Form />
        <div className='home__bg'></div>
      </main>
      <Footer />
    </div>
  )
}

export const getStaticProps = async () => {
  const depos = await getAllDepo();

  return {
    props: {
      depos: depos || []
    },
    revalidate: 5,
  }
}
