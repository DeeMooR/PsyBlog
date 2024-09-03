import { scroller } from "react-scroll";

export const scrollToSection = (page: string, padding?: number) => {
  scroller.scrollTo(page, {
    duration: 700,
    delay: 0,
    smooth: 'easeOutQuart',
    offset: padding || -60
  });
};