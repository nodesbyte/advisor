import React, { useEffect, useState } from 'react';
import { FaArrowUp } from 'react-icons/fa'; // using Font Awesome arrow icon

export default function PageTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Show the button when user scrolls down 300px
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 cursor-pointer right-6 p-3 bg-[#814d35] text-white rounded-full shadow-lg hover:bg-[#9a5f45] transition duration-300"
          aria-label="Scroll to top"
        >
          <FaArrowUp size={20} />
        </button>
      )}
    </>
  );
}
