import { useInView } from 'react-intersection-observer';
import { ReactNode } from 'react';

interface AnimatedElementProps {
    children: ReactNode;
  }

export const AnimatedElementBottom: React.FC<AnimatedElementProps> = ({ children }) => {
    const [ref, inView] = useInView({
      triggerOnce: false,
      threshold: 0.5,
    });
  
    return (
      <div
        ref={ref}
        className={`transition-transform duration-1000 ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-64'
        }`}
      >
        {children}
      </div>
    );
  };