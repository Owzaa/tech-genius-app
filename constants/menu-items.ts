'use client';

import * as React from "react";
import { styled } from '@mui/material/styles';


import {
  Dashboard,
  People,
  Business,
  Person,
} from "@styled-icons/material";



const MENU_OPTIONS: MenuOption[] = [
  {
    name: "Menu",
    icon: Dashboard,
    url: "#"
  },

  {
    name: "Employees",
    icon: People,
    url: "/employees",
    subItems: [
      {
        name: "Create-Employee",
        icon: Person,
        url: "/employees/create-new-employee"
      }
    ]
  },


  {
    name: "Department",
    icon: Business,
    url: "/department",
    subItems: [
      {
        name: "Create-Department",
        icon: Business,
        url: "/department/add-new-department"
      }
    ]
  },

];

export type MenuItem = {
  name: string;
  icon: React.ComponentType;
  url: string;
  id: string;
  depth: number;
  subItems?: MenuItem[];
};

type MenuOption = {
  name: string;
  icon: React.ComponentType;
  url: string;
  subItems?: MenuOption[];
};

function makeMenuLevel(options: MenuOption[], depth = 0): MenuItem[] {
  return options.map((option, idx) => ({
    ...option,
    id: depth === 0 ? idx.toString() : `${depth}.${idx}`,
    depth,
    subItems:
      option.subItems && option.subItems.length > 0
        ? makeMenuLevel(option.subItems, depth + 1)
        : undefined,
  }));
}

export const MENU_ITEMS: MenuItem[] = makeMenuLevel(MENU_OPTIONS);
