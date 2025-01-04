import React, { useState, useEffect } from "react";
import "../theme/css-component/ScrollToBottom.css"

const ScrollToBottom = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Toggle visibility of the button
  const toggleVisibility = () => {
    if (window.scrollY < document.documentElement.scrollHeight - window.innerHeight - 200) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll to the bottom
  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div>
      {isVisible && (
        <div className="scroll-to-bottom" onClick={scrollToBottom}>
          &#8681; {/* Unicode down arrow */}
        </div>
      )}
    </div>
  );
};

export default ScrollToBottom;
