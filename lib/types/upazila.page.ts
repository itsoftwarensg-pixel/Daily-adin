export interface UpazilaPageContentType {
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
  district: DistrictType;
  division: DivisionType;
  contents: UpazilaContentItemType[];
}

export interface DivisionType {
  id: number;
  name: string;
  name_bn: string;
  alias: string;
  photo: string | null;
  full_url: string;
}

export interface DistrictType {
  id: number;
  name: string;
  name_bn: string;
  alias: string;
  photo: string | null;
  full_url: string;
}

export interface UpazilaContentItemType {
  id: number;
  sub_heading: string | null;
  heading: string;
  description: string;
  created_at_bangla: string;
  full_image_path: string;
  full_url: string;
}
