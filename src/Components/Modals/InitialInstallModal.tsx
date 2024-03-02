import  { useState } from "react";
import Modal from "../Modal";
import {open} from '@tauri-apps/api/dialog'
import usePersistedState from "../../Utils/Hooks/usePersistedstate";
import { fs } from "@tauri-apps/api";
import { useGlobalSettings } from "../../Utils/Context/GlobalSettings";


export default function InitialInstallModal() {
    const [OpenModal, setOpenModal] = useState(true)
    const [error, setError] = useState('')
    const {setSettingsPath } = useGlobalSettings()
    const [firstTime, setFirstTime] = usePersistedState("FirstTime", true);


        let path: string;





        /* Open Dailogue box for user to select path they want to save system settings */
        const OpenPath = async() => {
            const selected = await open({
                directory: true,
                multiple: false,
                title: 'Select Save Directory'
              });
              if (Array.isArray(selected)) {
                // user selected multiple directories
                console.log(selected)
              } else if (selected === null) {
                // user cancelled the selection
                setError('You Must Select A Directory Before You Continue')
              } else {
                // user selected a single directory


                // change path to the selected path and set the local storage path too
                path = selected
                setSettingsPath(`${path.replace('\\\\', '/')}/Scribbler`)

                // prepare the default settings to be stored in the settings folder and stringify it before passing it to the handleInitialInstall Function
                let defaultsettings = {
                    'path': `${path}/Scribbler`
                }

                const settings = JSON.stringify(defaultsettings)

                handleInitialInstal(settings)
                setFirstTime(false)
                setOpenModal(false)
              }
        }


        const handleInitialInstal = async(settings: string) => {
            // create an optimize path for accesing the path
            const optimizedPath = `${path.replace('\\', '/')}/Scribbler`


            try {
                await fs.createDir(`${optimizedPath}`, {recursive: true})
                await fs.writeTextFile(`${optimizedPath}/settings.json`, settings)
                console.log(await fs.readTextFile(`${optimizedPath}/settings.json`))
            }catch(e){
                console.log(e)
            }
        }




  return (
    <Modal props="open-class z-10" show={OpenModal && firstTime}>
      <div className="w-full h-fit p-10 flex flex-col items-center gap-4 text-white  bg-gray-300 dark:bg-gray-700 rounded opacity-100">
        <span className="w-full bg-red-500  p-1 rounded">{error}</span>
        <h1 className="text-2xl"><b>SETTINGS PATH</b></h1>
        <span>Where do you want the App settings to be saved? </span>
        <button onClick={OpenPath} className="bg-blue-500 px-4 py-2 rounded-md"> Open </button>
      </div>
    </Modal>
  );
}
