// src/components/SectionControls/SectionControls.jsx

import { motion } from 'motion/react';

function SectionControls({
  sections,
  activeSection,
  activeIndex,
  onSectionChange,
}) {
  const isHeroActive = activeSection === 'hero';
  const visibleHeroNavSections = sections.filter((section) => {
    return section.id !== 'hero';
  });

  const displayedSections = isHeroActive ? visibleHeroNavSections : sections;

  return (
    <motion.nav
      className={`section-controls ${
        isHeroActive ? 'section-controls--hero' : 'section-controls--bottom'
      }`}
      aria-label="Portfolio sections"
      initial={false}
      animate={{
        opacity: 1,
      }}
      transition={{
        duration: 0.35,
        ease: 'easeOut',
      }}
    >
        {displayedSections.map((section) => {
            const sectionIndex = sections.findIndex((item) => {
            return item.id === section.id;
            });

            const isActive = section.id === activeSection;

            return (
            <button
                className={`section-controls__button ${
                isActive ? 'section-controls__button--active' : ''
                }`}
                key={section.id}
                type="button"
                onClick={() => onSectionChange(section.id)}
                aria-label={`Go to ${section.label}`}
                aria-current={isActive ? 'page' : undefined}
            >
                <span className="section-controls__dot"></span>

                {isHeroActive && (
                <span className="section-controls__label">
                    {section.label}
                </span>
                )}

                {!isHeroActive && (
                <span className="section-controls__number">
                    {String(sectionIndex + 1).padStart(2, '0')}
                </span>
                )}
            </button>
            );
        })}

      {!isHeroActive && (
        <p className="section-controls__counter">
          {String(activeIndex + 1).padStart(2, '0')} /{' '}
          {String(sections.length).padStart(2, '0')}
        </p>
      )}
    </motion.nav>
  );
}

export default SectionControls;