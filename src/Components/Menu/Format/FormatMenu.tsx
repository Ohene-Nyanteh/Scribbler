import { useState, useEffect, useRef } from "react";


export default function FormatMenu() {
  const [show, setShow] = useState(false);
  const menuRef = useRef(null);

  const handleOutsideClick = (event: any) => {
    // Close the menu if clicked outside the pop-up
    if (menuRef.current &&  !(menuRef.current as any).contains(event.target)) {
      setShow(false);
    }
  };

  useEffect(() => {
    // Attach event listener when the component mounts
    // Detach event listener when the component unmounts

    document.addEventListener("mousedown", handleOutsideClick);

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
        Format
      </span>
      <div
        ref={menuRef}
        className={`${
          show ? "flex flex-col gap-2" : "hidden"
        } absolute w-60 top-6 p-1 border z-10 rounded shadow-sm bg-gray-200 dark:bg-zinc-500 dark:text-white`}
      >
                <small>
          <p className={pclass}>
            <span>Font Family</span>
          </p>
        </small>
        <small>
          <p className={pclass}>
            <span>Increase Font size</span>
          </p>
        </small>
        <small>
          <p className={pclass}>
            <span>Decrease Font Size</span>
          </p>
        </small>
        <small>
          <p className={pclass}>
            <span>Background Color</span>
          </p>
        </small>
        <small>
          <p className={pclass}>
            <span>Font Color</span>
          </p>
        </small>
        <small>
          <p className={pclass}>
            <span>Format Project</span>
          </p>
        </small>
        <small>
          <p className={pclass}>
            <span>Auto Check Spell</span>
            <input type="checkbox" value="help" />
          </p>
        </small>
        <small>
          <p className={pclass}>Spelling & Grammar</p>
        </small>
      </div>
    </div>
  );
}
