import React from "react";
import { useGlobalContext } from "../store/GlobalContext";

export default function SubSectors({ subCategory }) {
  const { handleChecked } = useGlobalContext();

  return (
    <ul>
      {subCategory.map((item, index) => (
        <li key={index}>
          {item.subCategory ? (
            item.category
          ) : (
            <label>
              <input
                type="checkbox"
                checked={item.checked}
                value={item.category}
                onChange={(e) => handleChecked(e.target.value)}
              />
              <span>{item.category}</span>
            </label>
          )}
          {item.subCategory && (
            <SubSectors
              subCategory={item.subCategory}
              handleChecked={handleChecked}
            />
          )}
        </li>
      ))}
    </ul>
  );
}
