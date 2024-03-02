import SidebarItem from "./SidebarItem"
import items from "./SideBarData"


export default function Sidebar(){
    return (
        <div className="h-fit dark:fill-white dark:text-white pt-2">
          { items.map((item: any, index: any) => <SidebarItem key={index} item={item} />) }
        </div>
    )
}