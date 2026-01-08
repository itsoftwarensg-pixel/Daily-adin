// Video item interface
export interface WriterItemType {
    id: number;
    name: string;
    alias: string;
    title: string | null;
    photo: string;
    full_url: string;
};

export interface WriterType {
    id: number;
    name: string;
    alias: string;
    title: string | null;
    description: string | null;
    photo: string | null;
    full_url: string;
    status: number; // usually 0 | 1
    created_at: string; // ISO datetime
    updated_at: string; // ISO datetime
}


