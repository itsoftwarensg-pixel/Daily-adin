export interface HomePageContentItem {
    id: number;
    sub_heading: string;
    heading: string;
    description: string;
    created_at_bangla: string;
    full_image_path: string;
    full_url: string;
}

export interface HomePageContnetSection {
    name: string;
    url: string | null;
    contents: HomePageContentItem[];
}