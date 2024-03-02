import {open} from '@tauri-apps/api/dialog'
import { fs } from '@tauri-apps/api';
import { useGlobalSettings } from '../../../Utils/Context/GlobalSettings';
import Modal from '../../Modal';
import { useNewProjectModal } from '../../../Utils/Context/GeneralModalContexts';
import { BlankTemplate, NovelTemplate, ShortStoryTemplate } from '../../../assets';
import { useState } from 'react';
import { FaX } from 'react-icons/fa6';

export function NewProject() {
  const [selected, setSelected] = useState<any>('');
  const [projectName, setprojectName] = useState<any>('');
  const [template, settemplate] = useState<string | string[] | null>('');
  const [design, setdesign] = useState(true);
  const [design2, setdesign2] = useState(true);
  const [design3, setdesign3] = useState(true);


  const OpenSaveFolder = async() => {
    setSelected(await open({
      directory: true,
      multiple: false,
      title: 'Select Save Directory'
    }))
    if (Array.isArray(selected)) {
      // user selected multiple directories
      console.log(selected)
    } else if (selected === null) {
      // user cancelled the selection
    } else {
      // user selected a single directory
    }
  }



  const ChosenTemplate = (template: string ) => {
    if (template === 'blank'){
      setdesign(true)
      setdesign2(false)
      setdesign3(false)
    }else if (template === 'novel'){
      setdesign(false)
      setdesign2(true)
      setdesign3(false)
    }
    else if (template === 'short'){
      setdesign(false)
      setdesign2(false)
      setdesign3(true)
    }

     settemplate(template)
  }

    // Modal

    const {NewProjectModalData, setNewProjectModalData} = useNewProjectModal();




    const handleCreation = async() => {
      // get name of project
      // create folder at selected path
      // create project json file

      const path_to_project = `${selected}/${projectName}`

      try{
        await fs.createDir(path_to_project, {recursive: true})

        const content = {
          name: projectName,
          path_to_project: path_to_project
        }
  
        await fs.writeTextFile(`${path_to_project}/settings.json`,  JSON.stringify(content))
  
      }
      catch(e){
        console.log(e)
      }
      
      setNewProjectModalData(false)
      console.log(await fs.readTextFile(path_to_project+'/settings.json'))

    }


  return (
    <Modal show={NewProjectModalData} props='open-class z-10'>
      <div className='w-auto h-fit dark:bg-gray-800 bg-gray-300 border-blue-500 border rounded p-6'>
        <div className='flex justify-between'>
        <h3 className='font-bold text-3xl mb-1'>Choose A Template</h3>
        <button onClick={() => setNewProjectModalData(false)} className='border border-blue-600 px-3 rounded'><FaX /></button>
        </div>

        <section className='p-2 flex flex-col gap-4'>
          <h4 className='font-semibold text-2xl'>Templates</h4>
          <hr />
          <section className='flex gap-6 p-4'>
          <div className="flex flex-col gap-0 rounded-sm relative hover:bg-gray-700 p-1">
          <div className='absolute left-0 top-0 bg-gray-50 h-full w-full bg-transparent p-2'>
              <input type="checkbox" disabled={!design} onClick={() => ChosenTemplate('blank')} name="" className='accent-blue-400 p-2 w-6 h-6 absolute right-2' id="" />
            </div>
            <img src={BlankTemplate} alt="blank template" />
            <span className='text-center'>Blank Template</span>
          </div>
          <div className="flex relative flex-col gap-0 rounded-sm hover:bg-gray-700 p-1">
            <div className='absolute left-0 top-0 bg-gray-50 h-full w-full bg-transparent p-2'>
              <input type="checkbox" name="" disabled={!design2} onClick={() => ChosenTemplate('novel')}  className='accent-blue-400 p-2 w-6 h-6 absolute right-2' id="" />
            </div>
            <img src={NovelTemplate} alt="Novel template" />
            <span className='text-center'>Novel Template</span>
          </div>
          <div className="flex flex-col gap-0 relative rounded-sm hover:bg-gray-700 p-1">
          <div className='absolute left-0 top-0 bg-gray-50 h-full w-full bg-transparent p-2'>
              <input type="checkbox" name="" disabled={!design3} onClick={() => ChosenTemplate('short')}  className='accent-blue-400 p-2 w-6 h-6 absolute right-2' id="" />
            </div>
            <img src={ShortStoryTemplate} alt="Short story Template" />
            <span className='text-center'>Short Story Template</span>
          </div>
          </section>
          <div className='w-full flex flex-col gap-3'>
            <span>Project Title:</span>
            <input type="text" onChange={(e)=> setprojectName(e.target.value)} className='p-2' id='i-text-black'/>
          </div>
          <div className='w-full flex flex-col gap-3'>
            <span className='text-xl'>Choose Save Path</span>
            <hr />
            <div className='w-full flex gap-2 items-center'>
              <small className='border border-gray-400 p-1 rounded-lg flex-1'>{selected ? selected : 'Enter Selected Path.............'}</small>
            <button onClick={OpenSaveFolder} className='bg-blue-500 px-4 py-1 rounded'>Open</button>
            </div>
            <hr />
          </div>
          <button className='bg-blue-500 px-4 py-1 rounded' onClick={handleCreation}>Create</button>
        </section>
      </div>
    </Modal>
  )


}

export function newFile() {
    
}

export function openFile() {
    
}

export function openProject() {
    
}

export function openRecent(){

}

export function saveProject(){

}


export function autoSave() {
    
}

export function exportProject() {
    
}