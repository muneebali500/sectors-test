import React from "react";
import SubSectors from "./SubSectors";
import { useGlobalContext } from "../store/GlobalContext";

export default function Sectors({ isOpen }) {
  const { sectors } = useGlobalContext();

  return (
    <ul
      className="sectors-list"
      style={{ display: `${isOpen ? "block" : "none"}` }}
    >
      {sectors.map((item, index) => (
        <li key={index}>
          {item.category}
          {item.subCategory && <SubSectors subCategory={item.subCategory} />}
        </li>
      ))}
    </ul>
  );
}
