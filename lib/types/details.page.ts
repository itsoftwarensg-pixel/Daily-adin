

export interface ContentDetailsType {
    id: number;
    category_id: number;
    sub_category_id: number;
    sub_heading: string | null;
    heading: string;
    writer: ContentDetailsWriterType;
    meta_keywords: string | null;
    meta_title: string | null;
    meta_description: string | null;
    content_brief: string | null;
    content_details: string;
    all_tags: any | null; // TODO:: Define proper type
    tag_ids: any | null; // TODO:: Define proper type
    sound_path: string | null;
    video_path: string | null;
    is_timeline: number;
    share_count: number | null;
    related_content: any | null; // TODO:: Define proper type
    content_url: string;
    created_at: string; // ISO string
    created_at_bangla: string;
    updated_at_bangla: string;
    full_image_path: string;
    full_url: string;
    tags: ContentDetailsTagType[] | null;
    next_ids?: ContentDetailsNextItemType[] | null;
}

export interface ContentDetailsWriterType {
    id: number | null;
    name: string | null;
    alias: string | null;
    custom_writer: string | null;
}

export interface ContentDetailsNextItemType {
    id: number;
    sub_heading: string | null;
    heading: string;
    description: string;
    created_at_bangla: string;
    full_image_path: string;
    full_url: string;
}

export interface ContentDetailsTagType {
    id: number;
    name: string;
    alias: string;
    description: string;
    meta_title: string | null;
    meta_keywords: string | null;
    meta_description: string | null;
    sorting: number;
    image: string | null;
    status: number;
    created_at: string; // ISO date string
    updated_at: string; // ISO date string
}

