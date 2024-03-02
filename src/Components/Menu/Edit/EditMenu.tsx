import { useState, useEffect, useRef } from "react"

export default function EditMenu() {
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
        Edit
      </span>
      <div
        ref={menuRef}
        className={`${
          show ? "flex flex-col gap-2" : "hidden"
        } absolute w-60 top-6 p-1 border rounded z-10 shadow-sm bg-gray-200 dark:bg-zinc-500 dark:text-white`}
      >
                <small>
          <p className={pclass}>
            <span>Undo</span>
            <span>Ctrl + Z</span>
          </p>
        </small>
        <small>
          <p className={pclass}>
            <span>Redo</span>
            <span>Ctrl + Y</span>
          </p>
        </small>
        <small>
          <p className={pclass}>
            <span>Cut</span>
            <span>Ctrl + X</span>
          </p>
        </small>
        <small>
          <p className={pclass}>
            <span>Copy</span>
            <span>Ctrl + C</span>
          </p>
        </small>
        <small>
          <p className={pclass}>
            <span>Paste</span>
            <span>Ctrl + V</span>
          </p>
        </small>
        <small>
          <p className={pclass}>
            <span>Find</span>
            <span>Ctrl + F</span>
          </p>
        </small>
        <small>
          <p className={pclass}>
            <span>Replace</span>
            <span>Ctrl + H</span>
          </p>
        </small>
        <small>
          <p className={pclass}>
            <span>Find & Replace</span>
            <span>Ctrl + Shift H</span>
          </p>

        </small>
      </div>
    </div>
  );
}

