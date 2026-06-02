import { useRef, useState } from 'react';
import { motion } from 'motion/react';

import SectionControls from './components/SectionControls/SectionControls';
import { sections } from '../utils/sections';

function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const isNavigationLockedRef = useRef(false);
  const touchStartXRef = useRef(null);

  const activeIndex = sections.findIndex((section) => {
    return section.id === activeSection;
  });

  const goToSection = (sectionId) => {
    setActiveSection(sectionId);
  };

  const goToNextSection = () => {
    setActiveSection((currentSection) => {
      const currentIndex = sections.findIndex((section) => {
        return section.id === currentSection;
      });

      const nextIndex = Math.min(currentIndex + 1, sections.length - 1);

      return sections[nextIndex].id;
    });
  };

  const goToPreviousSection = () => {
    setActiveSection((currentSection) => {
      const currentIndex = sections.findIndex((section) => {
        return section.id === currentSection;
      });

      const previousIndex = Math.max(currentIndex - 1, 0);

      return sections[previousIndex].id;
    });
  };

  const lockNavigation = () => {
    isNavigationLockedRef.current = true;

    setTimeout(() => {
      isNavigationLockedRef.current = false;
    }, 900);
  };

  const handleWheel = (event) => {
    if (isNavigationLockedRef.current) {
      return;
    }

    const isScrollingDown = event.deltaY > 0;
    const isScrollingUp = event.deltaY < 0;

    if (isScrollingDown) {
      goToNextSection();
      lockNavigation();
      return;
    }

    if (isScrollingUp) {
      goToPreviousSection();
      lockNavigation();
    }
  };

  const handleTouchStart = (event) => {
    touchStartXRef.current = event.touches[0].clientX;
  };

  const handleTouchEnd = (event) => {
    if (touchStartXRef.current === null || isNavigationLockedRef.current) {
      return;
    }

    const touchEndX = event.changedTouches[0].clientX;
    const swipeDistance = touchStartXRef.current - touchEndX;
    const minimumSwipeDistance = 60;

    if (swipeDistance > minimumSwipeDistance) {
      goToNextSection();
      lockNavigation();
    }

    if (swipeDistance < -minimumSwipeDistance) {
      goToPreviousSection();
      lockNavigation();
    }

    touchStartXRef.current = null;
  };

  return (
    <main
      className="portfolio"
      onWheel={handleWheel}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
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
        {sections.map((section) => {
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
                        <span className="portfolio__photo-placeholder">
                          GT
                        </span>
                      </div>

                      <div className="portfolio__intro-text">
                        <p className="portfolio__eyebrow">
                          Portfolio
                        </p>
                        <h1 className="portfolio__title">
                          {section.title}
                        </h1>
                        <p className="portfolio__subtitle">
                          {section.subtitle}
                        </p>
                      </div>
                    </div>

                    <SectionControls
                      sections={sections}
                      activeSection={activeSection}
                      activeIndex={activeIndex}
                      onSectionChange={goToSection}
                    />
                  </>
                ) : (
                  <>
                    <p className="portfolio__eyebrow">
                      {String(activeIndex + 1).padStart(2, '0')} /{' '}
                      {String(sections.length).padStart(2, '0')}
                    </p>
                    <h2 className="portfolio__title">
                      {section.title}
                    </h2>
                    <p className="portfolio__subtitle">
                      {section.subtitle}
                    </p>
                  </>
                )}
              </div>
            </section>
          );
        })}
      </motion.div>

      {activeSection !== 'hero' && (
        <SectionControls
          sections={sections}
          activeSection={activeSection}
          activeIndex={activeIndex}
          onSectionChange={goToSection}
        />
      )}
    </main>
  );
}

export default App;