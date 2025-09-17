import React, { useEffect, useState } from 'react';
import { FaArrowUp } from 'react-icons/fa';

export default function PageTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-6 right-20 p-3 bg-[#814d35] text-white rounded-full shadow-lg hover:bg-[#9a5f45] transition duration-300 z-[9999]"
      aria-label="Scroll to top"
    >
      <FaArrowUp size={20} />
    </button>
  );
}
