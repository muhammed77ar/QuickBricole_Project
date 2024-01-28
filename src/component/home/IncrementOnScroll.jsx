import React, { useState, useEffect, useRef } from 'react';

const IncrementOnScroll = ({ num }) => {
  const [count, setCount] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const componentRef = useRef(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5, // Adjust as needed, 0.5 means 50% of the component must be visible
    };

    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries;
      setIsInView(entry.isIntersecting);
    }, options);

    if (componentRef.current) {
      observer.observe(componentRef.current);
    }

    return () => {
      if (componentRef.current) {
        observer.unobserve(componentRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isInView) {
      const intervalId = setInterval(() => {
        setCount((prevCount) => {
          if (prevCount === num) {
            clearInterval(intervalId);
            return prevCount;
          }
          return prevCount + 1;
        });
      }, 100/num);

      return () => clearInterval(intervalId);
    }
  }, [isInView, num]);

  return (
    <span ref={componentRef}>
       {count}+
    </span>
  );
};

export default IncrementOnScroll;
