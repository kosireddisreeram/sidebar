/* eslint-disable no-unused-vars */
import React, {  useState } from "react";
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
    />
          ))}
          </ul>
          </div>
</div>
  );
};
export default SideMenu;