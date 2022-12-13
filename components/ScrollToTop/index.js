import {useEffect} from 'react';
import { GoArrowUp } from 'react-icons/go';
import { ScrollToTopContainer } from './style';

export default function ScrollToTop() {
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);

  return (
    <ScrollToTopContainer>
      <button
        onClick={() => {
          window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        }}
      >
        <GoArrowUp />
      </button>
    </ScrollToTopContainer>
  );
}