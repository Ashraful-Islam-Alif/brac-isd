<<<<<<< HEAD
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to the top of the page whenever the location changes
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default ScrollToTop;
=======
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to the top of the page whenever the location changes
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default ScrollToTop;
>>>>>>> 8a932e4 (Added Retail and Sales course)
