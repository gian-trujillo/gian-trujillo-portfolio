import { motion } from 'motion/react';

function SectionControls({
  sections,
  activeSection,
  activeIndex,
  onSectionChange,
}) {
  const isHeroActive = activeSection === 'hero';

  return (
    <motion.nav
      className={`section-controls ${
        isHeroActive ? 'section-controls--hero' : 'section-controls--bottom'
      }`}
      aria-label="Portfolio sections"
      layout
    >
      {sections.map((section, index) => {
        const isActive = section.id === activeSection;

        return (
          <motion.button
            className={`section-controls__button ${
              isActive ? 'section-controls__button--active' : ''
            }`}
            key={section.id}
            type="button"
            onClick={() => onSectionChange(section.id)}
            aria-label={`Go to ${section.label}`}
            aria-current={isActive ? 'page' : undefined}
            layout
          >
            <span className="section-controls__dot"></span>

            {isHeroActive && (
              <span className="section-controls__label">
                {section.label}
              </span>
            )}

            {!isHeroActive && (
              <span className="section-controls__number">
                {String(index + 1).padStart(2, '0')}
              </span>
            )}
          </motion.button>
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