import { scroller } from "react-scroll";

export const scrollToSection = (page: string) => {
  scroller.scrollTo(page, {
    duration: 700,
    delay: 0,
    smooth: 'easeOutQuart',
    offset: -40
  });
};