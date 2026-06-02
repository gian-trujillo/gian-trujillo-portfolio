import { motion } from 'motion/react';

import SectionControls from '../SectionControls/SectionControls';

function PortfolioLayout({
  sections,
  activeSection,
  activeIndex,
  onSectionChange,
  onWheel,
  onTouchStart,
  onTouchEnd,
}) {
  return (
    <main
      className="portfolio"
      onWheel={onWheel}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      <motion.div
        className="portfolio__track"
        animate={{
          x: `-${activeIndex * 100}vw`,
        }}
        transition={{
          duration: 0.85,
          ease: [0.76, 0, 0.24, 1],
        }}
      >
        {sections.map((section, index) => {
          const isHero = section.id === 'hero';

          return (
            <section
              className={`portfolio__section portfolio__section--${section.id}`}
              key={section.id}
              aria-label={section.label}
            >
              <div className="portfolio__section-content">
                {isHero ? (
                    <>
                        <div className="portfolio__intro">
                            <div className="portfolio__photo">
                                <span className="portfolio__photo-placeholder">GT</span>
                            </div>

                            <div className="portfolio__intro-text">
                                <p className="portfolio__eyebrow">Portfolio</p>
                                <h1 className="portfolio__title">{section.title}</h1>
                                <p className="portfolio__subtitle">{section.subtitle}</p>
                            </div>
                        </div>
                        <p className="portfolio__hint">Scroll, swipe, or use arrow keys to explore</p>
                    </>
                ) : (
                  <>
                    <p className="portfolio__eyebrow">
                      {String(index + 1).padStart(2, '0')} /{' '}
                      {String(sections.length).padStart(2, '0')}
                    </p>
                    <h2 className="portfolio__title">{section.title}</h2>
                    <p className="portfolio__subtitle">{section.subtitle}</p>
                  </>
                )}
              </div>
            </section>
          );
        })}
      </motion.div>

      <SectionControls
        sections={sections}
        activeSection={activeSection}
        activeIndex={activeIndex}
        onSectionChange={onSectionChange}
      />
    </main>
  );
}

export default PortfolioLayout;