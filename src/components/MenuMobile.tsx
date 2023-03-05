"use client";

import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import {
  CheckCheck,
  Home,
  LayoutList,
  LogOut,
  Menu,
  PlusCircle,
} from "lucide-react";

export default function MenuMobile() {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button className="outline-none" aria-label="Customise options">
          <Menu className="text-teal-400 transition-colors active:text-teal-700" />
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          className="min-w-[220px] bg-white rounded-md p-[5px] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[opacity,transform] data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade"
          sideOffset={5}
        >
          <DropdownMenu.Item className="group text-[14px]  text-purple-700 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px]  outline-none">
            Inicio
            <div className="ml-auto pl-[20px] group-data-[highlighted]:text-white group-">
              <Home className="text-purple-700" size={16} />
            </div>
          </DropdownMenu.Item>
          <DropdownMenu.Item className="group text-[14px]  text-purple-700 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px]  outline-none   ">
            Novo Registro
            <div className="ml-auto pl-[20px] group-data-[highlighted]:text-white group-">
              <PlusCircle className="text-purple-700" size={16} />
            </div>
          </DropdownMenu.Item>
          <DropdownMenu.Item className="group text-[14px]  text-purple-700 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px]  outline-none   ">
            Categorias
            <div className="ml-auto pl-[20px] group-data-[highlighted]:text-white group-">
              <LayoutList className="text-purple-700" size={16} />
            </div>
          </DropdownMenu.Item>

          <DropdownMenu.Separator className="h-[1px] bg-violet6 m-[5px]" />

          <DropdownMenu.CheckboxItem className="group text-[14px]  text-purple-700 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px]  outline-none    ">
            Sair
            <div className="ml-auto pl-[20px]  group-data-[highlighted]:text-white group-">
              <LogOut className="text-purple-700" size={16} />
            </div>
          </DropdownMenu.CheckboxItem>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}
