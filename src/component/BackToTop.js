import React, { useState, useEffect } from "react";
import "../theme/css-component/BackToTop.css"; // Include your styles here

const BackToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Toggle visibility of the button
    const toggleVisibility = () => {
        const atBottom = window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 50;
        // if (window.scrollY > 200) {
        if (atBottom) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    // Scroll to the top
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
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
                <div className="back-to-top" onClick={scrollToTop}>
                    &#8679; {/* Unicode arrow */}
                </div>
            )}
        </div>
    );
};

export default BackToTop;
