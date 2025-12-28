export interface Category {
  id: number;
  name: string;
  name_bn: string | null;
  alias: string;
  meta_title: string;
  meta_keywords: string;
  meta_description: string;
  description: string; // HTML string
  photo: string | null;
  full_url: string;
  subcategories?: SubCategory[];
  position_contents: ContentItem[];
}

export interface CategoryType {
  id: number;
  name: string;
  name_bn: string | null;
  alias: string;
  photo: string | null;
  full_url: string;
}

export interface SubCategory {
  id: number;
  name: string;
  alias: string;
  sorting: number;
  photo: string | null;
  full_url: string;
}

export interface ContentItem {
  id: number;
  sub_heading: string | null;
  heading: string;
  description: string;
  created_at_bangla: string;
  full_image_path: string;
  full_url: string;
}
