// Photo page content section interface
export interface PhotoPageContnetSection {
    data: PhotoItemType[];
}

// Photo item interface
export interface PhotoItemType {
    id: number;
    name: string;
    name_bn: string | null;
    description: string | null;
    description_bn: string | null;
    photographer_name: string;
    photographer_name_bn: string | null;
    feature_image: string;
    created_at: string; // ISO date string
    created_at_bangla: string;
    contents?: PhotoContentItemType[];
}

export interface PhotoContentItemType {
    id: number;
    image: string;
    caption: string;
    photographer: string;
    created_at: string; // ISO 8601 timestamp
}
