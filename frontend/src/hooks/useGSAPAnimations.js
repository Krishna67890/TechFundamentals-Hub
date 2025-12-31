import { useEffect, useRef } from 'react';
import { 
  animatePageEntrance, 
  animateCard, 
  animateCodeBlock, 
  animateStaggeredList, 
  addHoverAnimation, 
  animateSectionHeader, 
  animateBounce,
  cleanupScrollTriggers 
} from '../utils/gsapAnimations';

// Custom hook to handle GSAP animations
export const useGSAPAnimations = () => {
  // Animation for page entrance - this function is meant to be used to set up the animation
  const useAnimatePage = (element) => {
    useEffect(() => {
      if (element?.current) {
        animatePageEntrance(element.current);
      }
    }, [element]);
  };

  // Animation for cards
  const useAnimateCards = (elementsRef) => {
    useEffect(() => {
      if (elementsRef?.current) {
        const elements = Array.isArray(elementsRef.current) 
          ? elementsRef.current 
          : [elementsRef.current];
        
        elements.forEach(element => {
          if (element) animateCard(element);
        });
      }
    }, [elementsRef]);
  };

  // Animation for code blocks
  const useAnimateCodeBlocks = (elementsRef) => {
    useEffect(() => {
      if (elementsRef?.current) {
        const elements = Array.isArray(elementsRef.current) 
          ? elementsRef.current 
          : [elementsRef.current];
        
        elements.forEach(element => {
          if (element) animateCodeBlock(element);
        });
      }
    }, [elementsRef]);
  };

  // Stagger animation for lists
  const useAnimateList = (elementsRef) => {
    useEffect(() => {
      if (elementsRef?.current && elementsRef.current.length > 0) {
        animateStaggeredList(elementsRef.current);
      }
    }, [elementsRef]);
  };

  // Hover animation for elements
  const useAddHoverEffects = (elementsRef) => {
    useEffect(() => {
      if (elementsRef?.current) {
        const elements = Array.isArray(elementsRef.current) 
          ? elementsRef.current 
          : [elementsRef.current];
        
        elements.forEach(element => {
          if (element) addHoverAnimation(element);
        });
      }
    }, [elementsRef]);
  };

  // Animation for section headers
  const useAnimateHeaders = (elementsRef) => {
    useEffect(() => {
      if (elementsRef?.current) {
        const elements = Array.isArray(elementsRef.current) 
          ? elementsRef.current 
          : [elementsRef.current];
        
        elements.forEach(element => {
          if (element) animateSectionHeader(element);
        });
      }
    }, [elementsRef]);
  };

  // Bounce animation for important elements
  const useAnimateBounceEffect = (element) => {
    useEffect(() => {
      if (element?.current) {
        animateBounce(element.current);
      }
    }, [element]);
  };

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      cleanupScrollTriggers();
    };
  }, []);

  return {
    useAnimatePage,
    useAnimateCards,
    useAnimateCodeBlocks,
    useAnimateList,
    useAddHoverEffects,
    useAnimateHeaders,
    useAnimateBounceEffect
  };
};