export interface DistrictPageContentType {
    id: number;
    name: string;
    name_bn: string;
    alias: string;
    meta_title: string;
    meta_keywords: string;
    meta_description: string;
    description: string;
    photo: string | null;
    full_url: string;
    division: DivisionType;
    contents: DistrictContentItemType[];
    upazilas: UpazilaType[];
}

export interface DivisionType {
    id: number;
    name: string;
    name_bn: string;
    alias: string;
    photo: string | null;
    full_url: string;
}

export interface UpazilaType {
    id: number;
    name: string;
    name_bn: string;
    alias: string;
    photo: string | null;
    full_url: string;
}

export interface DistrictContentItemType {
    id: number;
    sub_heading: string | null;
    heading: string;
    description: string;
    created_at_bangla: string;
    full_image_path: string;
    full_url: string;
}