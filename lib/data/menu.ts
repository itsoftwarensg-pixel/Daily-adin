export interface MenuItem {
    id: number;
    name: string;
    name_bn: string | null;
    alias: string;
    photo: string | null;
    full_url: string;
    subcategories: {
        id: number;
        name: string;
        alias: string;
        photo: string | null;
        full_url: string;
        sorting: number;
    }[];
};

export const menuItems: MenuItem[] = []