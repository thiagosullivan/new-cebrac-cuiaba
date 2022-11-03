import Head from 'next/head'
import Header from '../Components/Header'
import BannerHero from '../components/BannerHero'
import WhoWeDo from '../components/WhoWeDo'
import Careers from '../components/Careers'
import CloseToYou from '../components/CloseToYou'
import Depoiments from '../components/Depoiments'
import Form from '../components/Form'
import Footer from '../components/Footer'

export default function Home() {
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
        <CloseToYou />
        <Depoiments />
        <Form />
        <div className='home__bg'></div>
      </main>
      <Footer />
    </div>
  )
}
