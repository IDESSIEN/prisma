import { useRef } from 'react'
import { useScroll } from 'framer-motion'
import WordsPullUpMultiStyle from '../components/WordsPullUpMultiStyle'
import AnimatedLetter from '../components/AnimatedLetter'

const BODY_TEXT =
  'Over the last seven years, I have worked with Parallax, a Berlin-based production house that crafts cinema, series, and Noir Studio in Paris. Together, we have created work that has earned international acclaim at several major festivals.'

export default function About() {
  const bodyRef = useRef<HTMLParagraphElement>(null)
  const { scrollYProgress } = useScroll({
    target: bodyRef,
    offset: ['start 0.8', 'end 0.2'],
  })

  const chars = BODY_TEXT.split('')

  return (
    <section className="bg-black py-16 md:py-24 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="bg-[#101010] rounded-2xl md:rounded-3xl px-8 md:px-16 py-12 md:py-20 text-center">

          {/* Label */}
          <p className="text-primary text-[10px] sm:text-xs uppercase tracking-widest mb-8 md:mb-12">
            Visual arts
          </p>

          {/* Main heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl max-w-3xl mx-auto leading-[0.95] sm:leading-[0.9] mb-8 md:mb-12">
            <WordsPullUpMultiStyle
              segments={[
                { text: 'I am Idongesit Essien ,', className: 'font-normal text-primary' },
                {
                  text: 'a self-taught director.',
                  className: 'font-serif italic text-primary',
                },
                {
                  text: 'I have skills in color grading, visual effects, and narrative design.',
                  className: 'font-normal text-primary',
                },
              ]}
            />
          </h2>

          {/* Scroll-linked character reveal */}
          <p
            ref={bodyRef}
            className="text-xs sm:text-sm md:text-base max-w-2xl mx-auto leading-relaxed"
            style={{ color: '#DEDBC8' }}
          >
            {chars.map((char, i) => (
              <AnimatedLetter
                key={i}
                char={char}
                scrollYProgress={scrollYProgress}
                index={i}
                total={chars.length}
              />
            ))}
          </p>
        </div>
      </div>
    </section>
  )
}
