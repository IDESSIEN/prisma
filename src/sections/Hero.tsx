import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import WordsPullUp from '../components/WordsPullUp'

const CUSTOM_EASE = [0.16, 1, 0.3, 1] as const

export default function Hero() {
  return (
    <section className="h-screen p-4 md:p-6 bg-black">
      <div className="relative w-full h-full rounded-2xl md:rounded-[2rem] overflow-hidden">

        {/* Background video */}
        <video
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260405_170732_8a9ccda6-5cff-4628-b164-059c500a2b41.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Noise overlay */}
        <div className="noise-overlay absolute inset-0 opacity-[0.7] mix-blend-overlay pointer-events-none z-10" />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60 z-10" />

        {/* Navbar */}
        <div className="absolute top-0 left-0 right-0 flex justify-center z-20">
          <div className="bg-black rounded-b-2xl md:rounded-b-3xl px-4 py-2 md:px-8">
            <nav className="flex items-center gap-3 sm:gap-6 md:gap-12 lg:gap-14">
              {[
                { label: 'Our story', href: '#about' },
                { label: 'Collective', href: '#collective' },
                { label: 'Workshops', href: '#workshops' },
                { label: 'Programs', href: '#programs' },
                { label: 'Inquiries', href: '#inquiries' },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-[10px] sm:text-xs md:text-sm transition-colors duration-200"
                  style={{ color: 'rgba(225, 224, 204, 0.8)' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#E1E0CC')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(225, 224, 204, 0.8)')}
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        </div>

        {/* Hero content — bottom aligned */}
        <div className="absolute bottom-0 left-0 right-0 z-20 grid grid-cols-12 items-end px-4 md:px-8 pb-8 md:pb-12">

          {/* Heading — left 8 cols */}
          <div className="col-span-12 lg:col-span-8">
            <h1
              className="font-medium leading-[0.85] tracking-[-0.07em]"
              style={{
                fontSize: 'clamp(48px, 20vw, 256px)',
                color: '#E1E0CC',
              }}
            >
              <WordsPullUp
                text="Prisma"
                showAsterisk
                style={{ color: '#E1E0CC' }}
              />
            </h1>
          </div>

          {/* Right col — description + CTA */}
          <div className="col-span-12 lg:col-span-4 flex flex-col gap-6 pb-2 lg:pb-4">
            <motion.p
              className="text-primary/70 text-xs sm:text-sm md:text-base"
              style={{ lineHeight: 1.2 }}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.5, ease: CUSTOM_EASE }}
            >
              Prisma is a worldwide network of visual artists, filmmakers and storytellers
              bound not by place, status or labels but by passion and hunger to unlock
              potential through our unique perspectives.
            </motion.p>

            {/* CTA Button */}
            <motion.button
              className="group flex items-center gap-2 hover:gap-3 transition-all duration-300 w-fit bg-primary rounded-full pl-5 pr-1 py-1 font-medium text-sm sm:text-base text-black"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.7, ease: CUSTOM_EASE }}
            >
              <span>Join the lab</span>
              <span className="bg-black rounded-full w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                <ArrowRight className="w-4 h-4 text-primary" />
              </span>
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  )
}
