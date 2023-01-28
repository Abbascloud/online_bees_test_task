import { BottomMenuItemProps } from "../components/BottomMenu/BottomMenuItem/BottomMenuItem";
import { Chat, Profile, Work, Task } from "../../assets/menu";

export const MENU_ITEMS: Array<BottomMenuItemProps> = [
  { image: Work, title: "Work", path: "Work" },
  { image: Task, title: "Task", path: "Task" },
  { image: Chat, title: "Chat", path: "Chat" },
  { image: Profile, title: "Profile", path: "Profile" },
];
