import React, { useState, useEffect, useRef } from "react";

const ReadMoreLess = ({ text, containerWidth = "100%" }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isOverflowing, setIsOverflowing] = useState(false);
  const textRef = useRef(null);

  useEffect(() => {
    // Check if the text overflows beyond one line
    const { scrollHeight, clientHeight, scrollWidth, clientWidth } = textRef.current;
    if (scrollHeight > clientHeight || scrollWidth > clientWidth) {
      setIsOverflowing(true);
    }
  }, []);

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div
      className="read-more-less"
      style={{
        display: "flex",
        alignItems: "end",
        maxWidth: containerWidth, // Set max width for the container
        whiteSpace: isExpanded ? "normal" : "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
      }}
    >
      <div
        ref={textRef}
        className="text-container"
        style={{
          flexShrink: 1, // Ensures the text takes available space
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: isExpanded ? "normal" : "nowrap", // Wrap text when expanded
        }}
      >
        {text}
      </div>
      {isOverflowing && (
        <button
          type="button"
          className="read-more-button"
          onClick={toggleReadMore}
          style={{
            flexShrink: 0, // Prevent button from shrinking
            marginLeft: "8px",
          }}
        >
          {isExpanded ? "Read Less" : "Read More"}
        </button>
      )}
    </div>
  );
};

export default ReadMoreLess;
