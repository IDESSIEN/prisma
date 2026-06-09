import Hero from './sections/Hero'
import About from './sections/About'
import Features from './sections/Features'
import Collective from './sections/Collective'
import Workshops from './sections/Workshops'
import Programs from './sections/Programs'
import Inquiries from './sections/Inquiries'

export default function App() {
  return (
    <main className="bg-black min-h-screen">
      <Hero />
      <div id="about"><About /></div>
      <Features />
      <Collective />
      <Workshops />
      <Programs />
      <Inquiries />
    </main>
  )
}
