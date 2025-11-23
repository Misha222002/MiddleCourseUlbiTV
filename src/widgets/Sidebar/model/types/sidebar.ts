import { FunctionComponent, SVGAttributes } from "react";

export interface SidebarItemType {
    path: string;
    text: string;
    Icon: FunctionComponent<SVGAttributes<SVGElement>>;
    authOnly?: boolean;
}
