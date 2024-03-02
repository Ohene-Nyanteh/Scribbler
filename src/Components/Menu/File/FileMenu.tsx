import { useState, useEffect, useRef } from "react";
import { NewProject } from "./FileFunctions";
import { useNewProjectModal } from "../../../Utils/Context/GeneralModalContexts";

export default function FileMenu() {
  const [show, setShow] = useState(false);
  const menuRef = useRef(null);
  const { setNewProjectModalData} = useNewProjectModal()

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
        File
      </span>
      <div
        ref={menuRef}
        className={`${
          show ? "flex flex-col gap-2" : "hidden"
        } absolute w-60 top-6 p-1 z-10 border rounded shadow-sm bg-gray-200 dark:bg-zinc-500 dark:text-white`}
      >
                <small>
          <p className={pclass} onClick={() => setNewProjectModalData(true)}>
            
            <span>New Project</span>
            <span>Ctrl + N</span>
          </p>
        </small>
        <small>
          <p className={pclass}>
            <span>New File</span>
            <span>Ctrl + N</span>
          </p>
        </small>
        <small>
          <p className={pclass}>
            <span>Open File</span>
            <span>Ctrl + O</span>
          </p>
        </small>
        <small>
          <p className={pclass}>
            <span>Open Project</span>
            <span>Ctrl + P</span>
          </p>
        </small>
        <small>
          <p className={pclass}>
            <span>Open Recent</span>
            <span>Ctrl + R</span>
          </p>
        </small>
        <small>
          <p className={pclass}>
            <span>Save Project</span>
            <span>Ctrl + S</span>
          </p>
        </small>
        <small>
          <p className={pclass}>
            <span>Auto Save</span>
            <input type="checkbox" value="help" />
          </p>
        </small>
        <small>
          <p className={pclass}>Export</p>
        </small>
      </div>
    </div>
  );
}
