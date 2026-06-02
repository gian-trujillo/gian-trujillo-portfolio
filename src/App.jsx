import { useEffect, useRef, useState } from 'react';

import PortfolioLayout from './components/PortfolioLayout/PortfolioLayout';
import { sections } from '../utils/sections';

function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isHeroControlsDelayed, setIsHeroControlsDelayed] = useState(false);
  const isNavigationLockedRef = useRef(false);
  const touchStartXRef = useRef(null);
  const heroControlsDelayTimeoutRef = useRef(null);

  const activeIndex = sections.findIndex((section) => {
    return section.id === activeSection;
  });

  const visibleControlsSection =
    activeSection === 'hero' && isHeroControlsDelayed ? 'about' : activeSection;

  const startHeroControlsDelay = () => {
    clearTimeout(heroControlsDelayTimeoutRef.current);

    setIsHeroControlsDelayed(true);

    heroControlsDelayTimeoutRef.current = setTimeout(() => {
      setIsHeroControlsDelayed(false);
    }, 500);
  };

  const clearHeroControlsDelay = () => {
    clearTimeout(heroControlsDelayTimeoutRef.current);
    setIsHeroControlsDelayed(false);
  };

  const goToSectionByIndex = (nextIndex) => {
    const safeIndex = Math.min(Math.max(nextIndex, 0), sections.length - 1);
    const nextSection = sections[safeIndex];

    if (!nextSection || nextSection.id === activeSection) {
      return;
    }

    if (nextSection.id === 'hero') {
      startHeroControlsDelay();
    } else {
      clearHeroControlsDelay();
    }

    setActiveSection(nextSection.id);
  };

  const goToSection = (sectionId) => {
    if (sectionId === activeSection) {
      return;
    }

    if (sectionId === 'hero') {
      startHeroControlsDelay();
    } else {
      clearHeroControlsDelay();
    }

    setActiveSection(sectionId);
  };

  const goToNextSection = () => {
    goToSectionByIndex(activeIndex + 1);
  };

  const goToPreviousSection = () => {
    goToSectionByIndex(activeIndex - 1);
  };

  const lockNavigation = () => {
    isNavigationLockedRef.current = true;

    setTimeout(() => {
      isNavigationLockedRef.current = false;
    }, 900);
  };

  const navigateWithLock = (navigationCallback) => {
    if (isNavigationLockedRef.current) {
      return;
    }

    navigationCallback();
    lockNavigation();
  };

  const handleWheel = (event) => {
    const minimumScrollDistance = 30;

    if (Math.abs(event.deltaY) < minimumScrollDistance) {
      return;
    }

    if (event.deltaY > 0) {
      navigateWithLock(goToNextSection);
      return;
    }

    if (event.deltaY < 0) {
      navigateWithLock(goToPreviousSection);
    }
  };

  const handleTouchStart = (event) => {
    touchStartXRef.current = event.touches[0].clientX;
  };

  const handleTouchEnd = (event) => {
    if (touchStartXRef.current === null) {
      return;
    }

    const touchEndX = event.changedTouches[0].clientX;
    const swipeDistance = touchStartXRef.current - touchEndX;
    const minimumSwipeDistance = 60;

    if (swipeDistance > minimumSwipeDistance) {
      navigateWithLock(goToNextSection);
    }

    if (swipeDistance < -minimumSwipeDistance) {
      navigateWithLock(goToPreviousSection);
    }

    touchStartXRef.current = null;
  };

  useEffect(() => {
    return () => {
      clearTimeout(heroControlsDelayTimeoutRef.current);
    };
  }, []);

  useEffect(() => {
    const handleKeyDown = (event) => {
      const isTypingElement =
        event.target.tagName === 'INPUT' ||
        event.target.tagName === 'TEXTAREA' ||
        event.target.isContentEditable;

      if (isTypingElement) {
        return;
      }

      if (event.key === 'ArrowRight' || event.key === 'ArrowDown') {
        navigateWithLock(goToNextSection);
      }

      if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') {
        navigateWithLock(goToPreviousSection);
      }

      if (event.key === 'Escape') {
        navigateWithLock(() => goToSection('hero'));
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeIndex, activeSection]);

  return (
    <PortfolioLayout
      sections={sections}
      activeSection={activeSection}
      visibleControlsSection={visibleControlsSection}
      activeIndex={activeIndex}
      onSectionChange={goToSection}
      onWheel={handleWheel}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    />
  );
}

export default App;