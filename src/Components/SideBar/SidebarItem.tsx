import { useState } from "react"
import { BiCaretDown } from "react-icons/bi"

export default function SidebarItem({item}: any){
    const [open, setOpen] = useState(false)

    
    if(item.childrens){
        return (
            <div className={` rounded-sm flex flex-col justify-center w-full`}>
                <div className=" pl-6 cursor-pointer flex justify-between p-1 items-center w-full dark:hover:bg-gray-600 hover:bg-gray-200 rounded-sm" onClick={() => setOpen(!open)}>
                    <small className="flex gap-4 items-center">
                        {item.icon && item.icon}
                        {item.title}
                    </small> 
                        <BiCaretDown /> 
                </div>
                <div className={`${open && 'h-auto'} h-0 overflow-hidden pl-4`}>
                    { item.childrens.map((child: any, index: any) => <SidebarItem key={index} item={child} />) }
                </div>
            </div>
        )
    }else{
        return (
            <small className=" cursor-pointer pl-6 flex gap-4 items-center py-1 rounded-sm dark:hover:bg-gray-600 hover:bg-gray-200">
                {item.icon && item.icon}
                {item.title}
            </small>
        )
    }
}