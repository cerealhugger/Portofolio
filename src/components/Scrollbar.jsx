import { useEffect, useState } from "react";

const Scrollbar = () => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      let current = 0;
      sections.forEach((section, i) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
          current = i;
        }
      });
      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // run on load
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed right-8 top-1/2 -translate-y-1/2 flex flex-col space-y-4">
      {["Home", "About", "Projects","Notes","Contact"].map((label, i) => (
        <a
          key={i}
          href={`#${label.toLowerCase()}`}
          className={`w-2 h-12 rounded-full transition-colors ${
            active === i ? "bg-black" : "bg-gray-300"
          }`}
        />
      ))}
    </div>
  );
};

export default Scrollbar;
