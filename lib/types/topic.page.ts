// Topic details interface
export interface Topic {
    id: number;
    name: string;
    alias: string;
    description: string;
    meta_title: string | null;
    meta_keywords: string | null;
    meta_description: string | null;
    sorting: number;
    photo: string | null;
    full_url: string;
    status: number;
    created_at: string; // ISO date string
    updated_at: string; // ISO date string
}

// Topic content item interface
export interface TopicContentItem {
    id: number;
    sub_heading: string;
    heading: string;
    description: string;
    created_at_bangla: string;
    full_image_path: string;
    full_url: string;
}

