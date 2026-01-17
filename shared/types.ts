// Product Types
export interface Product {
  id: number;
  name: string;
  price: number;
  type: string;
  category: ProductCategory;
  description?: string;
  specs?: string[];
}

export type ProductCategory = 'One-Piece' | 'Bikini Top' | 'Bikini Bottom';

// Measurement Types
export interface MeasurementStep {
  id: number;
  title: string;
  description: string;
  field: MeasurementField;
  placeholder: string;
  unit: string;
  landmark: string;
}

export type MeasurementField = 'torso' | 'bust' | 'underbust' | 'hips';

export interface UserMeasurements {
  torso?: number;
  bust?: number;
  underbust?: number;
  hips?: number;
}

// Feature/Stat Types
export interface Feature {
  icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
  title: string;
  desc: string;
}

export interface StatItem {
  label: string;
  value: string;
}
