import { BiBookReader } from "react-icons/bi";
import { FaUser } from "react-icons/fa";
import { FaLocationDot, FaUserGroup } from "react-icons/fa6";
import { GiArchiveResearch } from "react-icons/gi";
import { MdOutlineLibraryBooks } from "react-icons/md";
import { RiDraftFill } from "react-icons/ri";

const items = [
    {
        "title": "Drafts",
        "icon": <RiDraftFill />,
        "childrens": [
            {
                "title": "Home",
                "icon": <BiBookReader />,
                "path": "/"
            },
            {
                "title": "Contact",
                "icon": <BiBookReader />,
                "childrens": [
                    {
                        "title": "Facebook",
                        "icon": <BiBookReader />
                    },
                    {
                        "title": "Twitter",
                        "icon": <BiBookReader />
                    },
                    {
                        "title": "Instagram",
                        "icon": <BiBookReader />
                    },
                    {
                        "title": "End",
                        "icon": <BiBookReader />,
                        "childrens": [
                            {
                                "title": "Facebook",
                                "icon": <BiBookReader />
                            },
                            {
                                "title": "Twitter",
                                "icon": <BiBookReader />
                            },
                            {
                                "title": "Instagram",
                                "icon": <BiBookReader />
                            }
                        ]
                    },
                ]
            },
            {
                "title": "FAQ",
                "icon": <BiBookReader />
            }
        ]
    },
    {
      "title": "Characters",
      "icon": <FaUser />,
      "childrens": [
        {
            "title": "Main Character",
            "icon": <FaUser />,
            "children" : [
            ]
        },
        {
            "title": "Other Characters",
            "icon": <FaUserGroup />,
            "children" : [
            ]
        }
      ]
    },
    {
      "title": "Places",
      "icon": <FaLocationDot />,
      "childrens": [

      ]
    },
    {
        "title": "Notes",
        "icon": <MdOutlineLibraryBooks />,
        "childrens": [
  
        ]
    },
    
    {
        "title": "Research",
        "icon": <GiArchiveResearch />,
        "childrens": [
  
        ]
    },
    
]


export default items
