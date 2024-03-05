import { TopLevelCategory } from "@/interfaces/page.omterface";
import { createContext } from "react";

export interface IAppContext {
    menu: MenuItem[],
    firstCategory: TopLevelCategory,
    setMenu?: (newMenu: MenuItem[]) => void;
};

export const AppContext = createContext<>();