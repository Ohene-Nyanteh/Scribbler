import "./App.css";
import FileMenu from "./Components/Menu/File/FileMenu";
import EditMenu from "./Components/Menu/Edit/EditMenu";
import FormatMenu from "./Components/Menu/Format/FormatMenu";
import ToolsMenu from "./Components/Menu/Tools/ToolsMenu";
import Sidebar from "./Components/SideBar/Sidebar.js";
import { useTheme } from "./Utils/Context/ThemeContext";
import WelcomePageModal from "./Components/Modals/WelcomePageModal";
import ViewMenu from "./Components/Menu/View/ViewMenu";
import { FaArrowAltCircleDown, FaMoon, FaSun } from "react-icons/fa";
import MyCKEditor from "./Components/Editor/CkEditor";
import { useState } from "react";
import InitialInstallModal from "./Components/Modals/InitialInstallModal.js";
import { useNewProjectModal } from "./Utils/Context/GeneralModalContexts.js";
import { NewProject } from "./Components/Menu/File/FileFunctions.js";
import { FaCaretDown } from "react-icons/fa6";
import { BsArrowDownCircle } from "react-icons/bs";

function App() {
  const [word, setword] = useState([])
  const [word_count, setwordCount] = useState(0)


  // Theme
  const { theme, toggleTheme } = useTheme();

  const [editorData, setEditorData] = useState("");


  const handleEditorChange = (data: string) => {
    setEditorData(data);
    console.log(data)
  };


  return (
    <div className={`${theme} w-full h-full`}>
      <InitialInstallModal />
      <NewProject />
      <WelcomePageModal />
      <div className="dark:bg-gray-950 bg-white">
        <div className="w-full h-screen">
          <BsArrowDownCircle/>
          {/* Menu */}
          <section className="w-full h-fit  dark:bg-gray-700 bg-gray-100 flex justify-between px-2">
            <div className="flex gap-4">
              <FileMenu />
              <EditMenu />
              <FormatMenu />
              <ViewMenu />
              <ToolsMenu />
              <div className="cursor-pointer dark:text-white">Help</div>
            </div>

            {/* themechanger */}
            <button className="" onClick={toggleTheme}>
              {theme == "dark" ? (
                <FaMoon className="fill-blue-500" />
              ) : (
                <FaSun className="fill-blue-800" />
              )}
            </button>
          </section>
          <div className="w-full h-8 bg-gray-200 dark:bg-gray-800 flex justify-between">
            <span>toggle_side bar </span>
            <span>| Title: The dark Horse |</span>
            <span>zen mode</span>
          </div>

          
          <section className="flex gap-2 w-full h-full">
            {/* Sidebar */}
            <div className="w-1/6 flex-shrink-0 bg-gray-300 dark:bg-gray-700 h-full overflow-auto pb-20">
            <Sidebar />
            </div>

            <div className="w-full h-full p-4 flex flex-col gap-4">
              <section>
              <section className="w-full rounded bg-gray-600" id="customToolbar">
                
                </section>
  
                {/* CKeditor */}
  
                <section className="w-full h-[78vh] flex justify-center  overflow-auto bg-gray-200 dark:bg-slate-500">
                  <div className="w-3/5 h-full">
                    <MyCKEditor onChange={(data) => handleEditorChange(data)} />
                  </div>
                </section>
              </section>


              <section className="w-full rounded p-2 dark:bg-zinc-600 bg-gray-300">
                Number of Words: {word}
              </section>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default App;
