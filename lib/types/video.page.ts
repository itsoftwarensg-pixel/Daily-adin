// Video page content section interface
export interface VideoageContnetSection {
    data: VideoItemType[];
    links: [];
    meta: [];
}

// Video item interface
export interface VideoItemType {
    id: number;
    title: string;
    embed_code: string;
    description: string;          // HTML string
    thumbnail: string;            // image URL
    created_at: string;           // ISO datetime
    created_at_bangla: string;
}
