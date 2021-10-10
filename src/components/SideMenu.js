/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import MenuItem from "./MenuItem";
export const menuItems = [
  {name: "Bowls",exact: true,to: "/"},
  { name: "Wraps", to: `/design`,  },
  { name: "Thali", to: `/design-2`,  },
  { name: "Breakfast", to: `/design-3`,  },
  { name: "Snacks", to: `/design-4`,  },
  { name: "Seasonals", to: `/design-5`,  },
];
const SideMenu = (props) => {
  const [inactive, setInactive] = useState(false);
useEffect(() => {
    let menuItems = document.querySelectorAll(".menu-item");
    menuItems.forEach((el) => {
      el.addEventListener("click", (e) => { 
        const next = el.nextElementSibling;
        menuItems.forEach((el) => el.classList.remove("active"));
        el.classList.toggle("active");
        console.log(next);
        if (next !== null) {
          next.classList.toggle("active");
        }
      });
    });
  }, []);
return (
    <div className={`side-menu ${inactive ? "inactive" : ""}`}>
      <div className="main-menu">
        <ul>
          {menuItems.map((menuItem, index) => (
            <MenuItem
              key={index}
              name={menuItem.name}
              exact={menuItem.exact}
              to={menuItem.to}
              onClick={(e) => {
                if (inactive) {
                  setInactive(false);
                }
              }}
            />
          ))}
          </ul>
          </div>
</div>
  );
};

export default SideMenu;