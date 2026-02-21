// National Election 2026
// Single item in a section
export interface ElectionItem {
  key: string;
  value: string;       // value comes as string in your JSON
  label_bn: string;
  label_en: string;
}

// Section (Referendum or Result)
export interface ElectionSection {
  title_bn: string;
  title_en: string;
  items: ElectionItem[];
}

// Full election data
export interface ElectionData {
  referendum?: ElectionSection;
  result?: ElectionSection;
}

// API response wrapper
export interface ElectionApiResponse {
  status: boolean;
  title: string;
  slug: string;
  data: ElectionData;
}
