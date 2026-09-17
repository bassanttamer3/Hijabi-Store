export interface IProduct {
  id: string;
  title: string;
  price: number;
  category: 'scarves' | 'khimars' | 'accessories' | 'hijabs';
  images?: {
    light: string;
    lightMedium: string;
    mediumTan: string;
    deep: string;
  };
  description?: string;
  colorHex?: string;
}