import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  const { state } = useLocation();
  useEffect(() => {
    if (state) {
      document.getElementById(state).scrollIntoView();
      window.location.hash = state;
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return null;
};

export default ScrollToTop;
