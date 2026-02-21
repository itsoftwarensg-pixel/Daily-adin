export interface RamadanDay {
  day: number;
  enDate: string;
  sehri_start: string;
  sehri_end: string;
  fajr: string;
  duhr: string;
  asr: string;
  maghrib: string;
  isha: string;
  iftar: string;
  status: string | number;
};

export interface RamadanDivision {
  division_en_name: string;
  division_bn_name: string;
  time_offset_minute: number;
};