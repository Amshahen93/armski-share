export interface MenuButton {
    name: string;
    rout?: Route;
    disabled?: boolean;
    submenu?: Submenu [];
}

export interface Submenu {
    name: string;
    rout: Route;
    disabled?: boolean;
}

export interface Route {
    rout: string [];
    queryParams?: string;
    fragment?: string;
    disabled?: boolean;
}
