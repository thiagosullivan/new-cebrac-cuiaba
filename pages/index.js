import Head from 'next/head'
import BannerHero from '../components/BannerHero'
import Header from '../Components/Header'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Cebrac Unidade de Cuiabá</title>
      </Head>
      <Header />
      <main>
        <BannerHero />
      </main>
    </div>
  )
}
