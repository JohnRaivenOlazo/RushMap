import { useEffect, useState } from "react";

const Typewriter = ({ strings, autoStart = true, loop = true, delay = 50, deleteSpeed = 30 }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  // Calculate the maximum string length for consistent layout
  const maxStringLength = strings.reduce((max, str) => Math.max(max, str.length), 0);

  useEffect(() => {
    if (!autoStart || strings.length === 0) return;

    const handleTyping = () => {
      const currentString = strings[currentIndex];
      const nextText = isDeleting
        ? currentString.slice(0, displayedText.length - 1)
        : currentString.slice(0, displayedText.length + 1);

      setDisplayedText(nextText);

      if (!isDeleting && nextText === currentString) {
        // Pause before deleting
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && nextText === "") {
        // Move to the next string
        setIsDeleting(false);
        setCurrentIndex((prev) => (prev + 1) % strings.length);
      }
    };

    const timeout = setTimeout(handleTyping, isDeleting ? deleteSpeed : delay);
    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, currentIndex, strings, delay, deleteSpeed, autoStart]);

  return (
    <span className="inline-block">
      {displayedText}
    </span>
  );
};

export default Typewriter;
