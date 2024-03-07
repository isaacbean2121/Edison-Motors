import { useInView } from 'react-intersection-observer';
import { ReactNode } from 'react';

interface AnimatedElementProps {
    children: ReactNode;
  }

export const AnimatedElement: React.FC<AnimatedElementProps> = ({ children }) => {
    const [ref, inView] = useInView({
      triggerOnce: false,
      threshold: 0.7,
    });
  
    return (
      <div
        ref={ref}
        className={`transition-transform duration-500 ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-28'
        }`}
      >
        {children}
      </div>
    );
  };