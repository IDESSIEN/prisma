import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowRight, Mail, MapPin } from 'lucide-react'
import WordsPullUpMultiStyle from '../components/WordsPullUpMultiStyle'

const EASE = [0.22, 1, 0.36, 1] as const

const intents = [
  'Joining the collective',
  'Applying to a workshop',
  'Applying to a program',
  'Commissioning work',
  'Press & partnerships',
  'Something else',
]

function Field({
  label,
  type = 'text',
  placeholder,
  delay,
  multiline = false,
}: {
  label: string
  type?: string
  placeholder: string
  delay: number
  multiline?: boolean
}) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-40px' })

  const inputClass =
    'w-full bg-[#101010] border border-white/[0.08] rounded-xl px-4 py-3.5 text-primary text-sm placeholder-gray-600 focus:outline-none focus:border-primary/40 transition-colors duration-200'

  return (
    <motion.div
      ref={ref}
      className="flex flex-col gap-2"
      initial={{ y: 16, opacity: 0 }}
      animate={isInView ? { y: 0, opacity: 1 } : { y: 16, opacity: 0 }}
      transition={{ duration: 0.5, delay, ease: EASE }}
    >
      <label className="text-gray-500 text-[10px] uppercase tracking-widest">{label}</label>
      {multiline ? (
        <textarea
          rows={4}
          placeholder={placeholder}
          className={inputClass}
          style={{ resize: 'none', color: '#E1E0CC' }}
        />
      ) : (
        <input type={type} placeholder={placeholder} className={inputClass} />
      )}
    </motion.div>
  )
}

export default function Inquiries() {
  const [selected, setSelected] = useState<string | null>(null)
  const tagRef = useRef<HTMLDivElement>(null)
  const isTagInView = useInView(tagRef, { once: true, margin: '-40px' })

  return (
    <section id="inquiries" className="bg-black py-16 md:py-24 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="mb-12 md:mb-16">
          <p className="text-primary text-[10px] sm:text-xs uppercase tracking-widest mb-4">
            Inquiries
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.9] tracking-[-0.03em] max-w-2xl">
            <WordsPullUpMultiStyle
              segments={[
                { text: "Tell us what you're", className: 'text-primary font-medium' },
                { text: 'building.', className: 'font-serif italic text-primary' },
                { text: "We'll find a way in.", className: 'text-primary font-medium' },
              ]}
              containerClassName="justify-start"
            />
          </h2>
        </div>

        {/* Two-col layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-8 md:gap-12">

          {/* Form */}
          <div className="bg-[#101010] rounded-2xl md:rounded-3xl p-7 md:p-10 flex flex-col gap-6">

            {/* Intent selector */}
            <div>
              <p className="text-gray-500 text-[10px] uppercase tracking-widest mb-3">
                What's this about?
              </p>
              <motion.div
                ref={tagRef}
                className="flex flex-wrap gap-2"
                initial={{ opacity: 0 }}
                animate={isTagInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.4 }}
              >
                {intents.map((intent, i) => (
                  <motion.button
                    key={intent}
                    className={`text-xs rounded-full px-3 py-1.5 border transition-all duration-200 ${
                      selected === intent
                        ? 'bg-primary text-black border-primary'
                        : 'text-primary/60 border-primary/20 hover:border-primary/50 hover:text-primary/90'
                    }`}
                    onClick={() => setSelected(intent)}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={isTagInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: 0.1 + i * 0.05, ease: EASE }}
                  >
                    {intent}
                  </motion.button>
                ))}
              </motion.div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <Field label="Your name" placeholder="Full name" delay={0.15} />
              <Field label="Email" type="email" placeholder="you@example.com" delay={0.2} />
            </div>

            <Field label="Where are you based?" placeholder="City, Country" delay={0.25} />
            <Field label="Tell us more" placeholder="What are you working on? What do you need?" delay={0.3} multiline />

            <motion.button
              className="group flex items-center gap-2 w-fit bg-primary rounded-full pl-5 pr-1 py-1 font-medium text-sm text-black mt-2"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4, ease: EASE }}
            >
              <span>Send inquiry</span>
              <span className="bg-black rounded-full w-8 h-8 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <ArrowRight className="w-3.5 h-3.5 text-primary" />
              </span>
            </motion.button>
          </div>

          {/* Right sidebar */}
          <div className="flex flex-col gap-5">

            {/* Info card */}
            <motion.div
              className="bg-[#101010] rounded-2xl p-6 flex flex-col gap-6 border border-white/[0.04]"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2, ease: EASE }}
            >
              <p className="text-primary text-[10px] uppercase tracking-widest">Get in touch directly</p>
              <div className="flex flex-col gap-4">
                <a href="mailto:hello@prisma.studio" className="flex items-center gap-3 group">
                  <div className="w-8 h-8 rounded-full bg-white/[0.05] flex items-center justify-center flex-shrink-0">
                    <Mail className="w-3.5 h-3.5 text-primary/60" />
                  </div>
                  <span className="text-sm text-gray-400 group-hover:text-primary transition-colors duration-200">
                    hello@prisma.studio
                  </span>
                </a>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-white/[0.05] flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-3.5 h-3.5 text-primary/60" />
                  </div>
                  <span className="text-sm text-gray-400">Berlin · Lagos · Buenos Aires</span>
                </div>
              </div>
              <p className="text-gray-600 text-xs leading-relaxed">
                We respond to every inquiry within 72 hours. For urgent matters, mark your subject line "URGENT."
              </p>
            </motion.div>

            {/* FAQ teaser */}
            <motion.div
              className="bg-[#101010] rounded-2xl p-6 flex flex-col gap-4 border border-white/[0.04]"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.35, ease: EASE }}
            >
              <p className="text-primary text-[10px] uppercase tracking-widest">Before you write</p>
              {[
                { q: 'Do I need a formal education?', a: 'No. We care about the work and the drive behind it.' },
                { q: 'Are scholarships available?', a: "Yes -- mention it in your inquiry and we'll follow up." },
                { q: 'Can I apply to multiple programs?', a: 'You can, but we ask that you prioritize one.' },
              ].map((faq) => (
                <div key={faq.q} className="border-t border-white/[0.06] pt-4">
                  <p className="text-primary/80 text-xs font-medium mb-1">{faq.q}</p>
                  <p className="text-gray-500 text-xs leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
