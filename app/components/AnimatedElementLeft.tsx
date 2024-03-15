"use client"

import { useInView } from 'react-intersection-observer';
import { ReactNode } from 'react';

interface AnimatedElementProps {
    children: ReactNode;
  }

export const AnimatedElementLeft: React.FC<AnimatedElementProps> = ({ children }) => {
    const [ref, inView] = useInView({
      triggerOnce: false,
      threshold: 0.8,
    });
  
    return (
      <div
        ref={ref}
        className={`transition-transform duration-1000 ${
          inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-64'
        }`}
      >
        {children}
      </div>
    );
  };