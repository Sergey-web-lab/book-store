import "./SidebarItem.css";
import { Badge } from "react-bootstrap";
import { FC } from "react";

interface CatItem {
  id: number
  title: string
  description?: string
}

type SidebarItemProps = {
  iconList: string[]
  obj: CatItem
  handleSetCat: (arg1: string, arg2: number) => void
  index: number
}

const SidebarItem: FC<SidebarItemProps> = ({ iconList, obj, handleSetCat, index }) => {
  return (
    <li className="sidebarItem__itemCat" onClick={() => handleSetCat(obj.title, index)}>
      <img className="sidebarItem__img" src={iconList[obj.id - 1]} alt={obj.title} /><Badge bg="secondary">{obj.title}</Badge>
    </li>
  );
}

export default SidebarItem;