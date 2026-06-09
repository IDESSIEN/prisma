import { useState, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { ArrowRight, Plus, Minus } from 'lucide-react'
import WordsPullUpMultiStyle from '../components/WordsPullUpMultiStyle'

const EASE = [0.22, 1, 0.36, 1] as const

const workshops = [
  {
    id: 1,
    number: '01',
    title: 'The Grammar of Light',
    instructor: 'Marcus Chen',
    format: 'Intensive · 3 days',
    location: 'Berlin, DE',
    date: 'Aug 14 - 16',
    spots: '8 spots left',
    description:
      "A hands-on immersion into practical cinematography: how light shapes mood, builds tension, and carries meaning. Shoot on location through the city's industrial east, then grade in the evening sessions.",
    skills: ['Natural light reading', 'On-set direction', 'Color temperature', 'Narrative composition'],
  },
  {
    id: 2,
    number: '02',
    title: 'Non-linear Storytelling',
    instructor: 'Ines Varela',
    format: 'Online · 6 weeks',
    location: 'Remote',
    date: 'Sep 1 - Oct 12',
    spots: '14 spots left',
    description:
      'Dismantle chronology and rebuild it with intention. This course draws from Borges, Resnais, and Haneke to teach how time can become a character. You will leave with a fully developed script structure.',
    skills: ['Script architecture', 'Time as device', 'Audience disorientation', 'Scene economy'],
  },
  {
    id: 3,
    number: '03',
    title: 'Texture & the Frame',
    instructor: 'Søren Blix',
    format: 'Studio day · 1 day',
    location: 'Copenhagen, DK',
    date: 'Sep 28',
    spots: '6 spots left',
    description:
      'A deep dive into the physicality of the image: grain, halation, chromatic aberration, and the way digital tools can recover what was lost. Taught in a fully equipped DaVinci Resolve suite.',
    skills: ['Film grain emulation', 'DaVinci Resolve', 'Halation & bloom', 'Digital to analog'],
  },
  {
    id: 4,
    number: '04',
    title: 'Documenting the Invisible',
    instructor: 'Yuki Tanaka',
    format: 'Residency · 5 days',
    location: 'Kyoto, JP',
    date: 'Oct 6 - 10',
    spots: '4 spots left',
    description:
      'The documentary workshop that resists definition. This residency explores how to film what cannot be seen: memory, grief, ritual, and the pause between words. Participants leave with a finished short.',
    skills: ['Observational shooting', '16mm technique', 'Interview craft', 'Edit as essay'],
  },
]

function WorkshopRow({ workshop, index }: { workshop: typeof workshops[0]; index: number }) {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      className="border-b border-white/[0.07] last:border-b-0"
      initial={{ y: 20, opacity: 0 }}
      animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: EASE }}
    >
      {/* Row header */}
      <button
        className="w-full flex items-center gap-4 py-6 text-left group"
        onClick={() => setOpen(!open)}
      >
        <span className="text-gray-600 text-[10px] font-mono w-6 flex-shrink-0">{workshop.number}</span>

        <div className="flex-1 grid grid-cols-1 sm:grid-cols-[1fr_auto] gap-2 sm:gap-8 items-center">
          <h3 className="text-primary font-medium text-base sm:text-lg md:text-xl group-hover:text-primary/80 transition-colors duration-200">
            {workshop.title}
          </h3>
          <div className="flex items-center gap-4 sm:gap-6 text-gray-500 text-[10px] sm:text-xs uppercase tracking-widest">
            <span>{workshop.format}</span>
            <span className="hidden sm:block">{workshop.date}</span>
            <span className="text-primary/60">{workshop.spots}</span>
          </div>
        </div>

        <div className="ml-4 flex-shrink-0">
          {open
            ? <Minus className="w-4 h-4 text-primary/60" />
            : <Plus className="w-4 h-4 text-primary/40 group-hover:text-primary/70 transition-colors" />
          }
        </div>
      </button>

      {/* Expandable content */}
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: EASE }}
            className="overflow-hidden"
          >
            <div className="pb-8 pl-10 grid grid-cols-1 md:grid-cols-[1fr_auto] gap-8">
              <div className="flex flex-col gap-5">
                <p className="text-gray-400 text-sm leading-relaxed max-w-xl">
                  {workshop.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {workshop.skills.map((s) => (
                    <span
                      key={s}
                      className="text-[10px] sm:text-xs text-primary/50 border border-primary/20 rounded-full px-3 py-1"
                    >
                      {s}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-6 text-gray-600 text-[10px] uppercase tracking-widest">
                  <span>Led by {workshop.instructor}</span>
                  <span>{workshop.location}</span>
                </div>
              </div>

              <div className="flex items-end">
                <a
                  href="#"
                  className="group flex items-center gap-2 w-fit bg-primary rounded-full pl-5 pr-1 py-1 font-medium text-sm text-black flex-shrink-0"
                >
                  <span>Apply now</span>
                  <span className="bg-black rounded-full w-8 h-8 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <ArrowRight className="w-3.5 h-3.5 text-primary" />
                  </span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function Workshops() {
  return (
    <section id="workshops" className="bg-black py-16 md:py-24 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="mb-12 md:mb-16">
          <p className="text-primary text-[10px] sm:text-xs uppercase tracking-widest mb-4">
            Workshops
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.9] tracking-[-0.03em] max-w-2xl">
            <WordsPullUpMultiStyle
              segments={[
                { text: 'Learn from people', className: 'text-primary font-medium' },
                { text: 'still making', className: 'font-serif italic text-primary' },
                { text: 'the work.', className: 'text-primary font-medium' },
              ]}
              containerClassName="justify-start"
            />
          </h2>
        </div>

        {/* Workshop list */}
        <div className="bg-[#101010] rounded-2xl md:rounded-3xl px-6 md:px-10">
          {workshops.map((w, i) => (
            <WorkshopRow key={w.id} workshop={w} index={i} />
          ))}
        </div>

        {/* Footer note */}
        <motion.p
          className="text-gray-600 text-xs mt-6 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          All workshops are capped at 12 participants. Scholarships available -- apply via Inquiries.
        </motion.p>
      </div>
    </section>
  )
}
