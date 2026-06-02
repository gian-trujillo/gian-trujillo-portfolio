// src/App.jsx

import { useRef, useState } from 'react';

import PortfolioLayout from './components/PortfolioLayout/PortfolioLayout';
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
    <PortfolioLayout
      sections={sections}
      activeSection={activeSection}
      activeIndex={activeIndex}
      onSectionChange={goToSection}
      onWheel={handleWheel}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    />
  );
}

export default App;