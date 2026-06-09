import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Check, ArrowRight } from 'lucide-react'
import WordsPullUpMultiStyle from '../components/WordsPullUpMultiStyle'

const CARD_EASE = [0.22, 1, 0.36, 1] as const

interface FeatureCardProps {
  title: string
  number: string
  icon: string
  items: string[]
  delay: number
}

function FeatureCard({ title, number, icon, items, delay }: FeatureCardProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <motion.div
      ref={ref}
      className="bg-[#212121] rounded-2xl p-6 flex flex-col gap-6 lg:h-[480px]"
      initial={{ scale: 0.95, opacity: 0 }}
      animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.95, opacity: 0 }}
      transition={{ duration: 0.6, delay, ease: CARD_EASE }}
    >
      {/* Icon */}
      <img
        src={icon}
        alt=""
        className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg object-cover"
      />

      {/* Title + number */}
      <div className="flex flex-col gap-1">
        <span className="text-gray-500 text-xs font-mono">{number}</span>
        <h3 className="text-primary font-medium text-base sm:text-lg leading-tight">{title}</h3>
      </div>

      {/* Checklist */}
      <ul className="flex flex-col gap-3 flex-1">
        {items.map((item, i) => (
          <li key={i} className="flex items-start gap-3">
            <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
            <span className="text-gray-400 text-xs sm:text-sm leading-relaxed">{item}</span>
          </li>
        ))}
      </ul>

      {/* Learn more */}
      <a
        href="#"
        className="flex items-center gap-2 text-primary text-xs sm:text-sm font-medium group w-fit"
      >
        <span>Learn more</span>
        <ArrowRight
          className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          style={{ transform: 'rotate(-45deg)' }}
        />
      </a>
    </motion.div>
  )
}

function VideoCard({ delay }: { delay: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <motion.div
      ref={ref}
      className="relative rounded-2xl overflow-hidden lg:h-[480px] min-h-[300px]"
      initial={{ scale: 0.95, opacity: 0 }}
      animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.95, opacity: 0 }}
      transition={{ duration: 0.6, delay, ease: CARD_EASE }}
    >
      <video
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260406_133058_0504132a-0cf3-4450-a370-8ea3b05c95d4.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      <p
        className="absolute bottom-5 left-5 font-medium text-sm sm:text-base"
        style={{ color: '#E1E0CC' }}
      >
        Your creative canvas.
      </p>
    </motion.div>
  )
}

export default function Features() {
  return (
    <section className="min-h-screen bg-black relative py-16 md:py-24 px-4 md:px-8">

      {/* Noise bg */}
      <div className="bg-noise absolute inset-0 opacity-[0.15] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal leading-snug">
            <WordsPullUpMultiStyle
              segments={[
                {
                  text: 'Studio-grade workflows for visionary creators.',
                  className: 'text-primary',
                },
                {
                  text: ' Built for pure vision. Powered by art.',
                  className: 'text-gray-500',
                },
              ]}
            />
          </h2>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-2 md:gap-1">
          <VideoCard delay={0} />

          <FeatureCard
            delay={0.15}
            number="01"
            title="Project Storyboard."
            icon="https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171918_4a5edc79-d78f-4637-ac8b-53c43c220606.png&w=1280&q=85"
            items={[
              'Visual timeline for every project stage',
              'Drag-and-drop shot sequencing',
              'Collaborative annotation tools',
              'Export to PDF or share link',
            ]}
          />

          <FeatureCard
            delay={0.30}
            number="02"
            title="Smart Critiques."
            icon="https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171741_ed9845ab-f5b2-4018-8ce7-07cc01823522.png&w=1280&q=85"
            items={[
              'AI-powered visual analysis and feedback',
              'Creative notes from studio mentors',
              'Tool integrations with Premiere and DaVinci',
            ]}
          />

          <FeatureCard
            delay={0.45}
            number="03"
            title="Immersion Capsule."
            icon="https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171809_f56666dc-c099-4778-ad82-9ad4f209567b.png&w=1280&q=85"
            items={[
              'Silence all notifications during deep work',
              'Ambient soundscapes curated for creatives',
              'Schedule syncing with your calendar',
            ]}
          />
        </div>
      </div>
    </section>
  )
}
