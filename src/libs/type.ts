export interface CarDetail {
  car_image: string;
  car_name: string;
  car_price: string;
  car_tag: boolean;
  tagText?: RibbonTag; // ✅ Use RibbonTag here
  car_features: string[];
  detail_background: object;
  car_specs: string[];
}



export type RibbonTag = "EV" | "PHEV" | "HEV";