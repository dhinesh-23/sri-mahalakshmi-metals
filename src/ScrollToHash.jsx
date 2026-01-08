import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollManager() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // 1️⃣ If URL has hash → scroll to section
    if (hash) {
      setTimeout(() => {
        const element = document.getElementById(hash.replace("#", ""));
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } 
    // 2️⃣ Normal route change → scroll to top
    else {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "auto"
      });
    }
  }, [pathname, hash]);

  return null;
}

