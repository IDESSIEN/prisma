import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import WordsPullUpMultiStyle from '../components/WordsPullUpMultiStyle'

const EASE = [0.22, 1, 0.36, 1] as const

const members = [
  {
    name: 'Yuki Tanaka',
    role: 'Documentary filmmaker',
    location: 'Tokyo',
    tags: ['16mm', 'Street', 'Archive'],
    accent: '#3a2a1a',
  },
  {
    name: 'Amara Diallo',
    role: 'Visual poet & photographer',
    location: 'Dakar',
    tags: ['Portrait', 'Ritual', 'Light'],
    accent: '#1a2a1e',
  },
  {
    name: 'Ines Varela',
    role: 'Narrative designer',
    location: 'Buenos Aires',
    tags: ['Script', 'World-building', 'Noir'],
    accent: '#1a1a2a',
  },
  {
    name: 'Søren Blix',
    role: 'Colorist & VFX artist',
    location: 'Copenhagen',
    tags: ['Grading', 'Compositing', 'Texture'],
    accent: '#2a1a1a',
  },
  {
    name: 'Chioma Eze',
    role: 'Sound designer',
    location: 'Lagos',
    tags: ['Field recording', 'Score', 'Foley'],
    accent: '#1e1a2a',
  },
  {
    name: 'Dani Reyes',
    role: 'Motion director',
    location: 'Mexico City',
    tags: ['Title sequences', 'Loop art', 'Kinetics'],
    accent: '#1a2228',
  },
]

function MemberCard({ member, index }: { member: typeof members[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <motion.div
      ref={ref}
      className="group relative bg-[#101010] rounded-2xl p-6 flex flex-col gap-4 overflow-hidden cursor-pointer border border-white/[0.04] hover:border-white/[0.09] transition-colors duration-500"
      initial={{ y: 24, opacity: 0 }}
      animate={isInView ? { y: 0, opacity: 1 } : { y: 24, opacity: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: EASE }}
    >
      {/* Subtle color wash on hover */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
        style={{ background: `radial-gradient(ellipse at 30% 50%, ${member.accent} 0%, transparent 70%)` }}
      />

      {/* Index */}
      <span className="text-gray-600 text-[10px] font-mono tracking-widest">
        {String(index + 1).padStart(2, '0')}
      </span>

      {/* Name */}
      <div>
        <h3 className="text-primary font-medium text-lg sm:text-xl leading-tight">{member.name}</h3>
        <p className="text-gray-500 text-xs sm:text-sm mt-1">{member.role}</p>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 flex-1">
        {member.tags.map((tag) => (
          <span
            key={tag}
            className="text-[10px] sm:text-xs text-primary/50 border border-primary/20 rounded-full px-3 py-1"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between pt-2 border-t border-white/[0.06]">
        <span className="text-gray-600 text-[10px] uppercase tracking-widest">{member.location}</span>
        <ArrowRight
          className="w-3.5 h-3.5 text-primary/40 group-hover:text-primary/80 transition-colors duration-300 -rotate-45"
        />
      </div>
    </motion.div>
  )
}

export default function Collective() {
  return (
    <section id="collective" className="bg-black py-16 md:py-24 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12 md:mb-16">
          <div>
            <p className="text-primary text-[10px] sm:text-xs uppercase tracking-widest mb-4">
              The collective
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.9] tracking-[-0.03em] max-w-lg">
              <WordsPullUpMultiStyle
                segments={[
                  { text: 'Creatives bound by', className: 'text-primary font-medium' },
                  { text: 'obsession,', className: 'font-serif italic text-primary' },
                  { text: 'not geography.', className: 'text-primary font-medium' },
                ]}
                containerClassName="justify-start"
              />
            </h2>
          </div>
          <motion.a
            href="#"
            className="group flex items-center gap-2 w-fit bg-primary rounded-full pl-5 pr-1 py-1 font-medium text-sm text-black flex-shrink-0"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <span>See all members</span>
            <span className="bg-black rounded-full w-8 h-8 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <ArrowRight className="w-3.5 h-3.5 text-primary" />
            </span>
          </motion.a>
        </div>

        {/* Member grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {members.map((m, i) => (
            <MemberCard key={m.name} member={m} index={i} />
          ))}
        </div>

        {/* Bottom stat bar */}
        <motion.div
          className="mt-12 grid grid-cols-3 border-t border-white/[0.06] pt-8 gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {[
            { value: '340+', label: 'Active members' },
            { value: '48', label: 'Countries represented' },
            { value: '12', label: 'Disciplines' },
          ].map((stat) => (
            <div key={stat.label} className="text-center sm:text-left">
              <p className="text-primary text-2xl sm:text-3xl font-medium tracking-tight">{stat.value}</p>
              <p className="text-gray-600 text-[10px] sm:text-xs uppercase tracking-widest mt-1">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
