// Home page content item interface
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

// Home page Photo Album item interface
export interface HomePagePhotoAlbumItem {
    id: number;
    name: string;
    name_bn: string | null;
    description: string;
    description_bn: string | null;
    photographer_name: string;
    photographer_name_bn: string | null;
    feature_image: string;
    created_at: string;
    created_at_bangla: string;
}

export interface HomePagePhotoAlbumSection {
    name: string;
    url: string | null;
    contents: HomePagePhotoAlbumItem[];
}
