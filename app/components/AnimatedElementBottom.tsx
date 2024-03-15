"use client"

import { useInView } from 'react-intersection-observer';
import { ReactNode } from 'react';

interface AnimatedElementProps {
    children: ReactNode;
  }

export const AnimatedElementBottom: React.FC<AnimatedElementProps> = ({ children }) => {
    const [ref, inView] = useInView({
      triggerOnce: false,
      threshold: 0.8,
    });
  
    return (
      <div
        ref={ref}
        className={`transition-transform duration-500 ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
        }`}
      >
        {children}
      </div>
    );
  };