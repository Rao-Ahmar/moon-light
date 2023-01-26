import Navbar from '@/components/Navbar'
import UnSplash from '@/components/UnSplash'
import Service from '@/components/Service'
import Demo from '@/components/Demo'
import About from '@/components/About'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <UnSplash />
      <Service />
      <Demo />
      <About />
      <Contact />
      <Footer />
    </>
  )
}
