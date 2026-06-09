import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowRight, Check } from 'lucide-react'
import WordsPullUpMultiStyle from '../components/WordsPullUpMultiStyle'

const EASE = [0.22, 1, 0.36, 1] as const

const programs = [
  {
    number: '01',
    title: 'Foundation Track',
    duration: '12 weeks',
    commitment: '8 hrs / week',
    format: 'Online',
    price: '$480',
    tagline: 'For self-taught creatives ready to go deeper.',
    description:
      'Structured mentorship for filmmakers and visual artists in the first five years of their practice. Build craft, critical language, and a cohort of peers who will outlast the program.',
    includes: [
      '1:1 mentor sessions (bi-weekly)',
      'Weekly group critique',
      'Access to the full Prisma archive',
      'Portfolio review at close',
      'Alumni community access',
    ],
    highlight: false,
  },
  {
    number: '02',
    title: 'Residency Program',
    duration: '6 months',
    commitment: '20 hrs / week',
    format: 'In-person',
    price: '$2,400',
    tagline: 'Six months, one city, one project that matters.',
    description:
      'Live and work inside a Prisma city hub -- Berlin, Lagos, or Buenos Aires. Embedded alongside working professionals, you develop a single ambitious project from concept to finished work.',
    includes: [
      'Studio space included',
      'Equipment & post access',
      'Weekly production meeting',
      'Mentor network + industry intros',
      'Premiere at closing showcase',
      'Travel stipend available',
    ],
    highlight: true,
  },
  {
    number: '03',
    title: 'Masters Exchange',
    duration: '4 weeks',
    commitment: 'Full-time',
    format: 'Hybrid',
    price: '$1,100',
    tagline: 'For mid-career artists recalibrating their practice.',
    description:
      "An intensive reset. Cross-discipline exchange with artists outside your field, a structured research period, and one-on-one sessions with Prisma's senior faculty -- including Marcus Chen.",
    includes: [
      'Cross-discipline pairing',
      'Research support + library',
      'Faculty access (senior level)',
      'Guest critic sessions',
      'Published interview in Prisma Journal',
    ],
    highlight: false,
  },
]

function ProgramCard({ program, index }: { program: typeof programs[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <motion.div
      ref={ref}
      className={`relative rounded-2xl p-7 flex flex-col gap-6 ${
        program.highlight
          ? 'bg-primary text-black border-2 border-primary'
          : 'bg-[#101010] border border-white/[0.06]'
      }`}
      initial={{ y: 28, opacity: 0, scale: 0.97 }}
      animate={isInView ? { y: 0, opacity: 1, scale: 1 } : { y: 28, opacity: 0, scale: 0.97 }}
      transition={{ duration: 0.6, delay: index * 0.15, ease: EASE }}
    >
      {program.highlight && (
        <span className="absolute top-4 right-4 bg-black text-primary text-[10px] uppercase tracking-widest px-3 py-1 rounded-full font-medium">
          Most chosen
        </span>
      )}

      {/* Header */}
      <div>
        <span className={`text-[10px] font-mono tracking-widest ${program.highlight ? 'text-black/50' : 'text-gray-600'}`}>
          {program.number}
        </span>
        <h3 className={`text-xl sm:text-2xl font-medium mt-1 ${program.highlight ? 'text-black' : 'text-primary'}`}>
          {program.title}
        </h3>
        <p className={`text-sm mt-2 leading-snug ${program.highlight ? 'text-black/70' : 'text-gray-500'}`}>
          {program.tagline}
        </p>
      </div>

      {/* Meta */}
      <div className={`grid grid-cols-3 gap-2 text-center rounded-xl p-3 ${program.highlight ? 'bg-black/10' : 'bg-white/[0.03]'}`}>
        {[
          { label: 'Duration', value: program.duration },
          { label: 'Format', value: program.format },
          { label: 'Commitment', value: program.commitment },
        ].map((m) => (
          <div key={m.label}>
            <p className={`text-[10px] uppercase tracking-widest ${program.highlight ? 'text-black/50' : 'text-gray-600'}`}>
              {m.label}
            </p>
            <p className={`text-xs sm:text-sm font-medium mt-0.5 ${program.highlight ? 'text-black' : 'text-primary'}`}>
              {m.value}
            </p>
          </div>
        ))}
      </div>

      {/* Description */}
      <p className={`text-xs sm:text-sm leading-relaxed ${program.highlight ? 'text-black/70' : 'text-gray-400'}`}>
        {program.description}
      </p>

      {/* Includes */}
      <ul className="flex flex-col gap-2.5 flex-1">
        {program.includes.map((item) => (
          <li key={item} className="flex items-start gap-2.5">
            <Check className={`w-3.5 h-3.5 flex-shrink-0 mt-0.5 ${program.highlight ? 'text-black/60' : 'text-primary'}`} />
            <span className={`text-xs ${program.highlight ? 'text-black/70' : 'text-gray-400'}`}>{item}</span>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <div className="flex items-center justify-between pt-4 border-t border-black/10">
        <div>
          <p className={`text-[10px] uppercase tracking-widest ${program.highlight ? 'text-black/50' : 'text-gray-600'}`}>
            From
          </p>
          <p className={`text-xl font-medium ${program.highlight ? 'text-black' : 'text-primary'}`}>
            {program.price}
          </p>
        </div>
        <a
          href="#inquiries"
          className={`group flex items-center gap-2 rounded-full pl-4 pr-1 py-1 font-medium text-sm flex-shrink-0 ${
            program.highlight ? 'bg-black text-primary' : 'bg-primary text-black'
          }`}
        >
          <span>Apply</span>
          <span className={`rounded-full w-7 h-7 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 ${
            program.highlight ? 'bg-primary' : 'bg-black'
          }`}>
            <ArrowRight className={`w-3 h-3 ${program.highlight ? 'text-black' : 'text-primary'}`} />
          </span>
        </a>
      </div>
    </motion.div>
  )
}

export default function Programs() {
  return (
    <section id="programs" className="bg-black py-16 md:py-24 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="mb-12 md:mb-16">
          <p className="text-primary text-[10px] sm:text-xs uppercase tracking-widest mb-4">
            Programs
          </p>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.9] tracking-[-0.03em] max-w-xl">
              <WordsPullUpMultiStyle
                segments={[
                  { text: 'Structured paths for', className: 'text-primary font-medium' },
                  { text: 'unstructured', className: 'font-serif italic text-primary' },
                  { text: 'minds.', className: 'text-primary font-medium' },
                ]}
                containerClassName="justify-start"
              />
            </h2>
            <p className="text-gray-500 text-xs sm:text-sm max-w-xs leading-relaxed">
              Every program is designed around one belief: the best learning happens when the stakes are real and the peers are extraordinary.
            </p>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {programs.map((p, i) => (
            <ProgramCard key={p.number} program={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
