import { useState, useEffect, useRef } from "react";

export default function ToolsMenu() {
  const [show, setShow] = useState(false);
  const menuRef = useRef(null);

  const handleOutsideClick = (event: any) => {
    // Close the menu if clicked outside the pop-up
    if (menuRef.current && !(menuRef.current as any).contains(event.target)) {
      setShow(false);
    }
  };

  useEffect(() => {
    // Attach event listener when the component mounts
    document.addEventListener("mousedown", handleOutsideClick);

    // Detach event listener when the component unmounts
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []); // Empty dependency array ensures that the effect runs only once on mount

  let pclass = "flex justify-between hover:bg-gray-300 p-1 rounded cursor-pointer";

  return (
    <div className="flex flex-col">
      <span
        onClick={() => setShow(!show)}
        className="cursor-pointer dark:text-white"
      >
        Tools
      </span>
      <div
        ref={menuRef}
        className={`${
          show ? "flex flex-col gap-2" : "hidden"
        } absolute w-60 top-6 p-1 border rounded z-10 shadow-sm bg-gray-200 dark:bg-zinc-500 dark:text-white`}
      >
        <small>
          <p className={pclass}>
            <span>Name Generator</span>
          </p>
        </small>
        <small>
          <p className={pclass}>
            <span>Word Count</span>
          </p>
        </small>
        <small>
          <p className={pclass}>
            <span>Synonym Finder</span>
          </p>
        </small>
        <small>
          <p className={pclass}>
            <span>Grammar Checker</span>
          </p>
        </small>
        <small>
          <p className={pclass}>
            <span>Plot Generator</span>
          </p>
        </small>
        <small>
          <p className={pclass}>
            <span>Character Builder</span>
          </p>
        </small>
        <small>
          <p className={pclass}>
            <span>Outline Creator</span>
          </p>
        </small>
        <small>
          <p className={pclass}>
            <span>Writing Prompts</span>
          </p>
        </small>
      </div>
    </div>
  );
}
