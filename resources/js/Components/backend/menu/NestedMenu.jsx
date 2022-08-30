import React, {useState} from 'react';
import { InertiaHead,InertiaLink } from '@inertiajs/inertia-react'

function NestedMenu(props) {
    const menus = [
        {
            "id":1,
            "name": "Profile",
            "show":false,
            "items": [
                {
                    "name": "Overview",
                },
                {
                    "name": "Projects"
                }
            ]
        },
        {
            "id":2,
            "name": "Skills",
            "show":false,
            'icon':'',
            "items": [
                {
                    "name": "All Skills",
                    "route":route("skill.index")
                },
                {
                    "name": "Create New",
                    "route":route("skill.create")

                }
            ]
        },
        {
            "id":3,
            "name": "Profile",
            "show":false,
            "items": [
                {
                    "name": "Overview"
                },
                {
                    "name": "Projects"
                }
            ]
        }
    ]
    const [menuItems,setMenuItems] = useState(menus);
    return (
        <div>
            {menuItems.map(function (menu,i) {
                return (
                    <div data-kt-menu-trigger="click" className={`menu-item menu-accordion ${menu.show ? "show" : ""}`} key={i} onClick={()=>setMenuItems(
                        menuItems =>
                            menuItems.map(item => ({
                                ...item,
                                show: !item.show ? item.id === menu.id : false
                            }))
                    )}>
                        <span className="menu-link">
                            <span className="menu-icon">
                              <i className="far fa-memory"></i>
                            </span>
                        <span className="menu-title">{menu.name}</span>
                        <span className="menu-arrow"></span>
                        </span>
                        <div className="menu-sub menu-sub-accordion menu-active-bg">
                            {
                                menu.items.map(function (item,i){
                                    return (
                                        <div data-kt-menu-trigger="click" key={i} className={`menu-item menu-accordion}`}>
                                            <span className="menu-link">
                                                <span className="menu-bullet">
                                                    <span className="bullet bullet-dot"></span>
                                                </span>
                                                <InertiaLink href={item.route}>
                                                    <span className="menu-title">{item.name}</span>
                                                </InertiaLink>
                                            </span>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                )
            })
            }

        </div>
    );
}

export default NestedMenu;
