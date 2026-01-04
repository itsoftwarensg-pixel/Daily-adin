// All common types will come here
export interface InnerInitialContentItemType {
    id: number;
    sub_heading: string | null;
    heading: string;
    description: string;
    created_at_bangla: string;
    full_image_path: string;
    full_url: string;
}

export interface Writer {
    id: number;
    name: string;
    alias: string;
    title: string;
    photo: string;
    full_url: string;
    custom_writer: string;
}

export interface NavbarMenuItem {
    text: string;
    href: string;
    isCat?: boolean;            // optional, only exists on some items
    isMegaMenu?: boolean;
    children?: NavbarMenuItem[];      // optional, for nested menus
};